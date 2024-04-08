// Thanks to https://github.com/t3-oss/create-t3-app/

import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]),
	API_URL: z.string().url(),
	APP_API_KEY: z.string(),
	TMDB_ACCESS_TOKEN: z.string(),
	REVALIDATE_TOKEN: z.string().optional(),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js
 * middleware, so you have to do it manually here.
 * @type {{ [k in keyof z.infer<typeof serverSchema>]: z.infer<typeof serverSchema>[k] | undefined }}
 */
export const serverEnvironment = {
	NODE_ENV: process.env.NODE_ENV,
	API_URL: process.env.API_URL,
	APP_API_KEY: process.env.APP_API_KEY,
	TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
	REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
};

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
	// Needed for sitemap generation
	NEXT_PUBLIC_SITE_URL: z.string().url(),
	NEXT_PUBLIC_STRAPI_URL: z.string().url(),
	NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
	NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().optional(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnvironment = {
	// Needed for sitemap generation
	NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
	NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
	NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
	NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:
		process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
};
