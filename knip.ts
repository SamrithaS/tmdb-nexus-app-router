import { type KnipConfig } from "knip";

const config: KnipConfig = {
	project: ["src/**/*.{ts,tsx}!"],
	entry: [
		"src/pages/**/*.{js,jsx,ts,tsx}!",
		"next.config.js",
		"tailwind.config.cjs",
		"env/**/*",
	],
	// sharp - used by next/image
	// autoprefixer - used by postcss for tailwind workflow
	// babel-loader - used by next-pwa
	// tilg - used for debugging react components
	ignoreDependencies: ["sharp", "autoprefixer", "babel-loader"],
	ignore: [
		"src/utils/fetchAllShowKeysDetails.ts",
		"src/utils/fetchAllShowsWithVideosKeyDetails.ts",
	],
	ignoreBinaries: ["husky", "is-ci"],
};

export default config;
