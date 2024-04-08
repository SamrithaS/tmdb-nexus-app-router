const tailwindForms = require("@tailwindcss/forms");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		relativeContentPathsByDefault: true,
		hoverOnlyWhenSupported: true,
	},
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		data: {
			"focus-visible": "focus-visible",
			enter: "enter",
			leave: "leave",
		},
		extend: {
			fontFamily: {
				sans: [
					`"InterVar", "Adjusted Arial Fallback", ${defaultTheme.fontFamily.sans.join(
						", ",
					)}`,
					{ fontVariationSettings: '"opsz" 32' },
				],
				newsreader: [
					"Newsreader",
					"Adjusted Georgia Fallback",
					...defaultTheme.fontFamily.serif,
				],
			},
			boxShadow: {
				input: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
				watchnow: "0px 5px 21px rgba(0, 0, 0, 0.25)",
			},
			supports: {
				"backdrop-blur": "backdrop-filter:blur(0)",
			},
			animation: {
				shimmer: "shimmer 1s ease-in-out infinite",
			},
			keyframes: {
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},
		},
	},
	plugins: [
		tailwindForms(),
		plugin(({ addUtilities }) => {
			addUtilities({
				".inter-display": {
					"font-optical-sizing": "auto",
				},
				".optimizeLegibility": {
					"text-rendering": "optimizeLegibility",
				},
				".ease-out-quad": {
					"transition-timing-function": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				},
			});
		}),
	],
};
