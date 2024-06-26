const { resolve } = require("node:path");
const { readFileSync } = require("node:fs");
const remoteCommits = require("./remote-commits.json");

const owner =
	"{{#if this.owner}}{{~this.owner}}{{else}}{{~@root.owner}}{{/if}}";
const host = "{{~@root.host}}";
const repository =
	"{{#if this.repository}}{{~this.repository}}{{else}}{{~@root.repository}}{{/if}}";
const issuePrefixes = ["#"];

const types = [
	{ type: "feat", section: "⭐ New Features" },
	{ type: "fix", section: "🐞 Bug Fixes" },
	{
		type: "refactor",
		section: "♻️  Code Refactoring",
	},
	{
		type: "perf",
		section: "⚡️  Performance Improvements",
	},
	{
		type: "docs",
		section: "📔 Documentation Changes",
	},
	{ type: "test", section: "🧪 Test Updates" },
	{ type: "build", section: "🛠️ Build Updates" },
	{ type: "ci", section: "💚 CI Changes" },
	{ type: "revert", section: "⏪️ Reverted Changes" },
	{
		type: "chore",
		section: "🔨 Maintenance Updates",
	},
	{ type: "style", section: "🎨 Code Style Changes" },
];

const findTypeEntry = (typesArgument, commitArgument) => {
	const typeKey = (
		commitArgument.revert ? "revert" : commitArgument.type || ""
	).toLowerCase();

	return typesArgument.find((entry) => {
		return (
			entry.type === typeKey &&
			(!entry.scope || entry.scope === commitArgument.scope)
		);
	});
};

// expand on the simple mustache-style templates supported in
// configuration (we may eventually want to use handlebars for this).
const expandTemplate = (templateArgument, context) => {
	let expanded = templateArgument;

	for (const key of Object.keys(context)) {
		// eslint-disable-next-line unicorn/prefer-string-replace-all
		expanded = expanded.replace(
			// Need to disable the rule here because of the runtime error - SyntaxError: Invalid regular expression: /{{host}}/: Lone quantifier brackets
			// eslint-disable-next-line require-unicode-regexp
			new RegExp(`{{${key}}}`, "g"),
			context[key],
		);
	}

	return expanded;
};

const commitUrlFormat = expandTemplate(
	"{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
	{
		host,
		owner,
		repository,
	},
);

/**
 * Generates a URL for a commit hash based on the provided context.
 * @param {object} context - The context object containing host, owner, and repository information.
 * @param {string} commitHash - The commit hash for which to generate the URL.
 * @returns {string} The URL for the specified commit hash.
 */
function generateCommitUrl(context, commitHash) {
	return `${context.host}/${context.owner}/${context.repository}/commit/${commitHash}`;
}

/**
 * Returns the title-cased scope of a commit, if it exists.
 * @param {object} commit - The commit object to extract the scope from.
 * @returns {string|null} The title-cased scope of the commit, or null if it does not exist.
 */
function getTitleCasedScope(commit) {
	const scope = commit?.scope?.toUpperCase();
	return scope ? scope : null;
}

const addBangNotes = (commit, context) => {
	// eslint-disable-next-line unicorn/no-unsafe-regex
	const breakingHeaderPatternRegex = /^\w*(?:\(.*\))?!: (.*)$/u;
	const match = breakingHeaderPatternRegex.exec(commit.header);

	if (match) {
		// the description of the change.
		const noteText = match[1];

		commit.notes.push({
			title: "🧨 BREAKING CHANGE",
			text: null,
			scope: getTitleCasedScope(commit),
			body: commit?.body,
			subject: commit?.subject,
			header: noteText,
			shortHash: commit.shortHash,
			hashUrl: generateCommitUrl(context, commit.hash),
		});

		// Remove the commit to the notable changes as it will be added as breaking change
		commit.body = null;
	}
};

const addNotableChanges = (commit, context) => {
	// eslint-disable-next-line regexp/optimal-quantifier-concatenation
	const pattern = /^(?:feat|fix)\(.+\)?!?:\s.*$/u;
	const match = pattern.exec(commit.header);

	if (match && commit?.body) {
		context.notableChanges.push({
			scope: getTitleCasedScope(commit),
			body: commit.body,
			subject: commit?.subject,
			shortHash: commit.shortHash,
			hashUrl: generateCommitUrl(context, commit.hash),
		});
	}
};

const addOtherNotableChanges = (commit, context) => {
	// eslint-disable-next-line regexp/optimal-quantifier-concatenation
	const pattern = /^(?:refactor|perf|docs)\(.+\)?!?:\s.*$/u;
	const match = pattern.exec(commit.header);

	if (match && commit?.body) {
		context.otherNotableChanges.push({
			scope: getTitleCasedScope(commit),
			body: commit.body,
			subject: commit?.subject,
			shortHash: commit.shortHash,
			hashUrl: generateCommitUrl(context, commit.hash),
		});
	}
};

const transform = (commit, context) => {
	// Remove commit body if it's author is a bot
	if (commit.authorName === "renovate[bot]") {
		commit.body = "";
	}

	const issues = [];
	const entry = findTypeEntry(types, commit);

	// adds additional breaking change notes
	// for the special case, test(system)!: hello world, where there is
	// a '!' but no 'BREAKING CHANGE' in body:
	addBangNotes(commit, context);

	commit.notes = commit.notes.filter((note) => {
		return note.text === null;
	});

	context.hasNotableChanges = true;
	context.notableChangesTitle = "👀 Notable Changes";
	context.notableChanges = context.notableChanges || [];

	addNotableChanges(commit, context);

	if (context.notableChanges.length === 0) {
		context.hasNotableChanges = false;
	}

	context.hasOtherNotableChanges = true;
	context.otherNotableChangesTitle = "📌 Other Notable Changes";
	context.otherNotableChanges = context.otherNotableChanges || [];

	addOtherNotableChanges(commit, context);

	if (context.otherNotableChanges.length === 0) {
		context.hasOtherNotableChanges = false;
	}

	if (entry) commit.type = entry.section;

	if (commit.scope === "*") {
		commit.scope = "";
	}

	if (typeof commit.hash === "string") {
		commit.shortHash = commit.hash.slice(0, 7);
	}

	if (typeof commit.subject === "string") {
		// Issue URLs.
		const issueRegEx = `(${issuePrefixes.join("|")})(\\d+)`;
		const re = new RegExp(issueRegEx, "gu");

		// eslint-disable-next-line unicorn/prefer-string-replace-all
		commit.subject = commit.subject.replace(re, (_, prefix, issue) => {
			issues.push(prefix + issue);

			const url = expandTemplate(
				"{{host}}/{{owner}}/{{repository}}/issues/{{id}}",
				{
					host: context.host,
					owner: context.owner,
					repository: context.repository,
					id: issue,
				},
			);

			return `[${prefix}${issue}](${url})`;
		});

		// User URLs.
		// eslint-disable-next-line unicorn/prefer-string-replace-all
		commit.subject = commit.subject.replace(
			// eslint-disable-next-line unicorn/no-unsafe-regex
			/\B@([a-z\d](?:-?[a-z\d/]){0,38})/gu,
			(_, user) => {
				if (user.includes("/")) {
					return `@${user}`;
				}

				const usernameUrl = expandTemplate("{{host}}/{{user}}", {
					host: context.host,
					user,
				});

				return `[@${user}](${usernameUrl})`;
			},
		);
	}

	// remove references that already appear in the subject
	commit.references = commit.references.filter((reference) => {
		if (!issues.includes(reference.prefix + reference.issue)) {
			return true;
		}

		return false;
	});

	const matchedRemoteCommit = remoteCommits.find((remoteCommit) => {
		return remoteCommit.shortHash === commit.shortHash;
	});

	if (matchedRemoteCommit?.login) {
		commit.userLogin = matchedRemoteCommit.login;
	}

	return commit;
};

const mainTemplate = readFileSync(
	resolve(__dirname, "./templates/template.hbs"),
	"utf8",
);

const commitTemplate = readFileSync(
	resolve(__dirname, "./templates/commit.hbs"),
	"utf8",
);

const issueUrlFormat = expandTemplate(
	"{{host}}/{{owner}}/{{repository}}/issues/{{id}}",
	{
		host,
		owner,
		repository,
		id: "{{this.issue}}",
	},
);

const commitPartial = commitTemplate
	.replaceAll("{{commitUrlFormat}}", commitUrlFormat)
	.replaceAll("{{issueUrlFormat}}", issueUrlFormat);

const commitGroupsSort = (a, b) => {
	const commitGroupOrder = [
		"🎨 Code Style Changes",
		"💚 CI Changes",
		"🔨 Maintenance Updates",
		"🧪 Test Updates",
		"🛠️ Build Updates",
		"⏪️ Reverted Changes",
		"📔 Documentation Changes",
		"⚡️  Performance Improvements",
		"♻️  Code Refactoring",
		"🐞 Bug Fixes",
		"⭐ New Features",
	];
	const gRankA = commitGroupOrder.indexOf(a.title);
	const gRankB = commitGroupOrder.indexOf(b.title);
	if (gRankA >= gRankB) {
		return -1;
	} else {
		return 1;
	}
};

module.exports = {
	transform,
	mainTemplate,
	commitPartial,
	commitGroupsSort,
};
