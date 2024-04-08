# Frontend Configuration

- [Frontend Configuration](#frontend-configuration)
  - [Sentry](#sentry)
  - [Adding images to the project](#adding-images-to-the-project)
  - [Favicons \& Manifest Genration](#favicons--manifest-genration)
  - [Sitemap \& Robots.txt](#sitemap--robotstxt)
  - [Font Generation \& Optimization](#font-generation--optimization)
  - [Few Gotchas](#few-gotchas)

## Sentry

If you have already created a Sentry project and want to update the
configuration for your project using a `sentry.properties` file, you can follow
these steps, or run `sentry-cli` commands following the sentry docs directly.

- Open the `sentry.properties` file in a text editor.

- Update the `url` field with the URL for your Sentry instance. This is
  typically <https://sentry.io> for the public Sentry instance, but you may be
  using a private Sentry instance with a different URL.

- Update the `org` field with the slug for your Sentry organization. This is the
  name of your organization as it appears in the URL for your organization page
  (e.g. <https://sentry.io/organizations/YOUR_ORGANIZATION>).

- Update the `project` field with the slug for your Sentry project. This is the
  name of your project as it appears in the URL for your project page (e.g.
  <https://sentry.io/organizations/YOUR_ORGANIZATION/projects/YOUR_PROJECT_SLUG>).

- Update the `cli.executable` field with the path to the sentry-cli executable
  on your system. This is typically located at
  node_modules/@sentry/cli/bin/sentry-cli if you have installed the @sentry/cli
  package using npm.

Save the `sentry.properties` file and close the text editor.

The `.sentryclirc`` file is a configuration file that is used by the Sentry
command-line interface (CLI) to store your Sentry API token.

- Open the `.sentryclirc` file in a text editor.

- Update the `token` field with your Sentry API token. You can find your Sentry
  API token in your Sentry account settings under "API".

## Adding images to the project

To protect your application from malicious users, configuration is required in
order to use external images. Images with a domain that is not listed in the
`domains` array in the `next.config.js` file will fail to build.

Check the current configuration in the [`next.config.js`](../next.config.js)
file to see how it is configured for the current project.

You can read more about it in the Next.js documentation
[remote patterns](https://nextjs.org/docs/api-reference/next/image#remote-patterns)
& [domains](https://nextjs.org/docs/api-reference/next/image#domains).

## Favicons & Manifest Genration

This project uses [Favicon Generator](https://realfavicongenerator.net/) to
generate the favicons and manifest files. The favicons & manifest config's are
located in the [`public`](../public) folder.
[Maskable Images](https://web.dev/maskable-icon/) are generated using
[Maskable App](https://maskable.app/editor). Apple Splash Images are generated
using
[Splash Screen Generator](https://progressier.com/pwa-icons-and-ios-splash-screen-generator).

To update a favicon, you can upload a new image to the generator and download
the new files. You can also update the manifest config's file to change the
appearance of the favicon. The manifest config file is improved to support
pwa(Progressive Web App) features using
[next-pwa](https://github.com/shadowwalker/next-pwa).

All these are added to the front-end using the
[next-seo](https://github.com/garmeeh/next-seo) in the file
[`next-seo.config.ts`](../next-seo.config.ts).

**NOTE:** Need to point `NEXT_PUBLIC_SITE_URL` to the correct production URL in
the `.env` file.

## Sitemap & Robots.txt

The sitemap and robots.txt files are generated using the
[next-sitemap](https://github.com/iamvishnusankar/next-sitemap). This is
configured in the [`next-sitemap.js`](../next-sitemap.config.cjs) file.

This package generates the sitemap and robots.txt files in the
[`public`](../public) folder when the project is built.

**NOTE:** Need to point `NEXT_PUBLIC_SITE_URL` to the correct production URL in
the `.env` file.

## Font Generation & Optimization

This project uses custom generated fonts from variable fonts.

For optimization multiple subset of fonts are generated using the
[pyftsubset](https://markoskon.com/creating-font-subsets/#multiple-subsets-by-script)
and added to the project.

<details> <summary> <b>How to generate the fonts</b> </summary>

```sh
pyftsubset\
  Inter.var.woff2 \
  --output-file="Inter.var-english.woff2" \
  --flavor=woff2 \
  --layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,\
  onum,pnum,smcp,c2sc,frac,lnum,tnum,subs,sups,\
  cswh,dlig,ss01,ss03,zero"\
  --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
  U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
  U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&
pyftsubset\
  Inter.var.woff2 \
  --output-file="Inter.var-rest-latin.woff2" \
  --flavor=woff2 \
  --layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,\
  onum,pnum,smcp,c2sc,frac,lnum,tnum,subs,sups,\
  cswh,dlig,ss01,ss03,zero"\
  --unicodes="U+00A1,U+00AA-00AB,U+00AF,U+00B8,U+00BB,U+00BF-00D6,\
  U+00D8-00F6,U+00F8-00FF,U+0131,U+0152-0153,U+02B0-02FF" &&
pyftsubset\
  Inter.var.woff2 \
  --output-file="Inter.var-latin-extended-a.woff2" \
  --flavor=woff2 \
  --layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,\
  onum,pnum,smcp,c2sc,frac,lnum,tnum,subs,sups,\
  cswh,dlig,ss01,ss03,zero"\
  --unicodes="U+0100-0130,U+0132-0151,U+0154-017F" &&
pyftsubset\
  Inter.var.woff2 \
  --output-file="Inter.var-latin-extended-b.woff2" \
  --flavor=woff2 \
  --layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,\
  onum,pnum,smcp,c2sc,frac,lnum,tnum,subs,sups,\
  cswh,dlig,ss01,ss03,zero"\
  --unicodes="U+0180-024F" &&
pyftsubset\
  Inter.var.woff2 \
  --output-file="Inter.var-latin-extended-additional.woff2" \
  --flavor=woff2 \
  --layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,\
  onum,pnum,smcp,c2sc,frac,lnum,tnum,subs,sups,\
  cswh,dlig,ss01,ss03,zero"\
  --unicodes="U+1E00-1EFF" &&
pyftsubset\
  Inter.var.woff2 \
  --output-file="Inter.var-rest.woff2" \
  --flavor=woff2 \
  --layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,\
  onum,pnum,smcp,c2sc,frac,lnum,tnum,subs,sups,\
  cswh,dlig,ss01,ss03,zero"\
  --unicodes="U+0259,U+0300-03C0,U+2070-2073,U+2075-20AB,\
  U+20AD-2121,U+2123-218F,U+21BC-2211,U+2213-2214,U+2216-F8FE,\
  U+FB01-FB02"
```

</details>

`Newsreader` font is generated using the same process but with only the english
subset and with particular font weight from its variable font using
[slice](https://github.com/source-foundry/Slice)

Add the fonts to the [`public/fonts`](../public/fonts) folder. The fonts are
then loaded in the [`styles/global.css`](../src/styles/global.css) file.

To further reduce the CLS (Cumulative Layout Shift), the font fallbacks are
added to the [`styles/global.css`](../src/styles/global.css) file using
[Fallback Font Generator](https://screenspan.net/fallback)

## Few Gotchas

- In frontend, show & watch keys are used to generate the paths in
  `getStaticPaths`, any falsy value will be ignored and will be treated as `404`
  page. So, make sure to use a proper & unique keys in the backend inorder to
  see the respecitve pages in the frontend.
