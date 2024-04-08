# Development

## Table of Contents

- [Development](#development)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Configuration](#configuration)
  - [Installing the dependencies](#installing-the-dependencies)
  - [Running the project locally](#running-the-project-locally)
  - [Building the project](#building-the-project)
  - [Deploying the project](#deploying-the-project)
  - [Detailed information on technologies used](#detailed-information-on-technologies-used)
  - [More DX scripts](#more-dx-scripts)
    - [Prettier](#prettier)
    - [Eslint](#eslint)
    - [Stylelint](#stylelint)
    - [Markdown](#markdown)
    - [Check Types](#check-types)
    - [Check unused dependencies, exports \& types](#check-unused-dependencies-exports--types)
    - [Check Spelling](#check-spelling)
    - [Check package.json](#check-packagejson)
    - [Test](#test)

## Prerequisites

Before you get started, you will need to have the following tools installed on
your machine:

- **[Node.js][1]** (version 12 or later)
- **[pnpm][2]** (version 5 or later) or **[npm][3]** or **[yarn][4]** (version 6
  or later)
- **[Git][5]** (optional, but recommended for version control)

> This repository includes a list of suggested VS Code extensions. It's a good
> idea to use [VS Code][6] and accept its suggestion to install them, as they'll
> help with development.

## Getting Started

## Configuration

The project uses environmental variables for configuration. You can set the
environmental variables in a **`.env`** file in the root directory of the
project. The **`.env`** file should contain key-value pairs in the following
format:

- **`NEXT_PUBLIC_SITE_URL`** (required): The URL of the frontend App of the
  project.
- **`NEXT_PUBLIC_STRAPI_URL`** (required): The URL of the backend API that the
  project uses.
- **`NEXT_PUBLIC_SENTRY_DSN`** (optional): The URL of the Sentry service used
  for error logging and reporting.
- **`NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID`** (optional): The ID of the Google Tag
  Manager service used for analytics.
- **`API_URL`** (required): The URL of the authentication API that the project
  uses.
- **`APP_API_KEY`** (required): The API key for authenticating users with the
  authentication API.
- **`REVALIDATE_TOKEN`** (optional): The token for revalidating the ISR cache.
  The URL for revalidating the cache is **`api/revalidate?secret=<token>`**.

You should also set a **`.sentryclirc`** file in the root directory of the
project.

```bash
[auth]
token=
```

**Note:** There are already two files **`.env.local`** &
**`.sentryclirc.local`** which can be used to setup the env quickly by removing
the **`.local`** in their filename.

> Adding a new environmental variable requires a zod schema update in the `env`
> folder and a new entry in the `schema.js` file in the `serverSchema` variable
> or `clientSchema` variable.

## Installing the dependencies

After you have set the environmental variables in the **`.env`** file, you can
run the project locally by

```shell
git clone https://github.com/timelessco/tmdb-nexus-web
cd tmdb-nexus-web
pnpm install
```

This will download and install all the required dependencies for the project.

## Running the project locally

```bash
pnpm dev
```

Open <http://localhost:3000> with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page
auto-updates as you edit the file

## Building the project

To build the project to a production environment, you can use the

```bash
pnpm build
```

to build the production-ready version of the project. This will create a
**`.next`** directory with the compiled code and static assets.

Run the above built application locally using

```bash
pnpm start
```

## Deploying the project

You can then deploy the **`.next`** directory to your production environment
using a static file server, such as **[NGINX][7]**.

[Deploy using NGINX][8]

Guide on how to deploy Next.js to various [hosting providers][9].

## Detailed information on technologies used

[Configurations & Setup Required][10]

[Client Side stack][11]

[Server Side stack][12]

## More DX scripts

> Check for all the below errors in one command using [Turbo Repo][20]

`pnpm lint`

> AutoFix all the linting errors in one command using [Turbo Repo][20]

`pnpm format`

### Prettier

[Prettier][13] is used to format code. It should be applied automatically when
you save files in VS Code or make a Git commit.

> Check the formatting errors

`pnpm lint:prettier`

> AutoFix the formatting errors

`pnpm format:prettier`

> This package includes several forms of linting to enforce consistent code
> quality and styling. Each should be shown in VS Code, and can be run manually
> on the command-line:

### Eslint

Extends all the necessary rulesets from [eslint-config-canonical][14] for the
Next.js project that lints JavaScript and TypeScript source files

> Check for the linting errors

`pnpm lint:eslint`

> AutoFix the linting errors

`pnpm format:eslint`

### Stylelint

([Stylelint][15]): Checks all css files

> Check the css linting errors

`pnpm lint:csslint`

> AutoFix the css linting errors

`pnpm format:csslint`

### Markdown

([Markdownlint][16]): Checks all Markdown files

> Check the markdown linting errors

`pnpm lint:csslint`

> AutoFix the markdown linting errors

`pnpm format:csslint`

### Check Types

([TypeScript][17]): Checks all TypeScript files

> Check TypeScript types

`pnpm lint:types`

### Check unused dependencies, exports & types

([knip](https://github.com/webpro/knip)): Checks all unused dependencies,
exports & types

> Check the spelling errors

`pnpm lint:knip`

### Check Spelling

([cspell][18]): Spell checks across all source files

> Check the spelling errors

`pnpm lint:spelling`

### Check package.json

([npm-package-json-lint][19]): Lints the `package.json` file

> Check the package.json linting errors

`pnpm lint:package-json`

### Test

> Run the test suite

`pnpm test`

[1]: https://nodejs.org/en/
[2]: https://pnpm.io/
[3]: https://www.npmjs.com/
[4]: https://yarnpkg.com/
[5]: https://git-scm.com/
[6]: https://code.visualstudio.com
[7]: https://www.nginx.com/
[8]: ../docs/deploy-nginx.md
[9]: https://nextjs.org/docs/deployment
[10]: ../docs/configs.md
[11]: ../docs/client-side.md
[12]: ../docs/server-side.md
[13]: https://prettier.io
[14]: https://github.com/gajus/eslint-config-canonical
[15]: https://stylelint.io/
[16]: https://github.com/DavidAnson/markdownlint
[17]: https://www.typescriptlang.org/
[18]: https://cspell.org
[19]: https://npmpackagejsonlint.org/
[20]: https://turbo.build/repo
