import { type DefaultSeoProps } from "next-seo";

const title = "TMDB Nexus";

const config: DefaultSeoProps = {
	titleTemplate: `%s | ${title}`,
	defaultTitle: title,
	description:
		"Millions of movies, TV shows and people to discover. Explore now.",
	twitter: {
		cardType: "summary_large_image",
	},
	additionalMetaTags: [
		{
			name: "viewport",
			content:
				"initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
		},
		{
			httpEquiv: "x-ua-compatible",
			content: "IE=edge; chrome=1",
		},
		{
			name: "application-name",
			content: title,
		},
		{
			name: "apple-mobile-web-app-capable",
			content: "yes",
		},
		{
			name: "apple-mobile-web-app-status-bar-style",
			content: "default",
		},
		{
			name: "apple-mobile-web-app-title",
			content: "TMDB Nexus",
		},
		{
			name: "format-detection",
			content: "telephone=no",
		},
		{
			name: "mobile-web-app-capable",
			content: "yes",
		},
		{
			name: "msapplication-config",
			content: "/pwa/browserconfig.xml",
		},
		{
			name: "msapplication-TileColor",
			content: "#000000",
		},
		{
			name: "msapplication-tap-highlight",
			content: "no",
		},
		{
			name: "theme-color",
			content: "#000000",
		},
	],
	additionalLinkTags: [
		// Fonts Preload
		{
			rel: "preload",
			href: "/fonts/Inter.var-english.woff2",
			as: "font",
			type: "font/woff2",
			crossOrigin: "anonymous",
		},

		// PWA
		{
			rel: "manifest",
			href: "/pwa/site.webmanifest",
		},
		{
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg",
		},
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: "/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/favicon-32x32.png",
		},
		{
			rel: "shortcut icon",
			href: "/favicon.ico",
		},
		{
			rel: "mask-icon",
			href: "/pwa/safari-pinned-tab.svg",
			color: "#000000",
		},

		// Apple Splash Screens
		{
			rel: "apple-touch-icon",
			href: "/pwa/apple-touch-icon.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
			href: "/splash_screens/iPhone_14_Pro_Max_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
			href: "/splash_screens/iPhone_14_Pro_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
			href: "/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
			href: "/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
			href: "/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
			href: "/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/iPhone_11__iPhone_XR_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
			href: "/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/12.9__iPad_Pro_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/10.9__iPad_Air_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/10.5__iPad_Air_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/10.2__iPad_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
			href: "/splash_screens/8.3__iPad_Mini_landscape.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
			href: "/splash_screens/iPhone_14_Pro_Max_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
			href: "/splash_screens/iPhone_14_Pro_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
			href: "/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
			href: "/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
			href: "/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
			href: "/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/iPhone_11__iPhone_XR_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
			href: "/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/12.9__iPad_Pro_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/10.9__iPad_Air_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/10.5__iPad_Air_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/10.2__iPad_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
		},
		{
			rel: "apple-touch-startup-image",
			media:
				"screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
			href: "/splash_screens/8.3__iPad_Mini_portrait.png",
		},
	],
};

export default config;
