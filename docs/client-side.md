# Next JS Frontend

The stack includes several components that are designed to improve performance
and accessibility.

- [Tailwind](https://tailwindcss.com/) is a CSS framework that provides a
  collection of utility classes that can be used to quickly style elements. This
  allows us to create custom designs without having to write a lot of CSS code.
- The font performance is enhanced by creating font language subsets with a
  fallback font. This allows us to only load the necessary characters for the
  text being displayed, which reduces the time it takes to load the page and
  improves the layout stability.
- [Ariakit](https://ariakit.org/) is a library that helps with accessibility by
  ensuring that our website complies with the Web Content Accessibility
  Guidelines (WCAG). This makes the website easier to use for people with
  disabilities.
- [useSWR](https://swr.vercel.app/) is a library that allows developers to
  easily fetch data on the client side by reusing the fetch functions that are
  already implemented on the backend. This reduces the amount of code that needs
  to be written and makes it easier to manage data in the client.

Using the below options to revalidate the frontend fetches in a session

```js
    {
      keepPreviousData: true,
      refreshInterval: 600000, // 10 minutes in milliseconds - per session
    },
```

- User tokens are stored in local storage with a time to live (TTL) of 7200 ms
  (or two hours) . This means that the tokens will be stored in the user's web
  browser for a maximum of 7200 ms before they expire and need to be refreshed.
- The Instagram-style modal routing is a technique that allows us to create a
  seamless user experience by using modals for navigation. This can make the
  website feel more interactive and engaging for users.
- [Framer motion](https://www.framer.com/docs/) is a library that allows us to
  create fluid animations on the website. It uses the physics of motion to make
  the animations feel natural and responsive to user interactions. This can help
  improve the overall aesthetic of the website and make it more engaging for
  users.
- [The Embla Carousel](https://www.embla-carousel.com/get-started/react/) is a
  library that allows us to create carousels with cool swipe interactions. It
  has been enhanced with additional accessibility features to make it easier to
  use for everyone.
- [Blurhash](https://blurha.sh/) is a tool that allows developers to show a
  blurred version of an image using a hash string. This can be useful for
  loading images faster or providing a placeholder while an image is being
  loaded.
- User tokens are stored in local storage with a time to live (TTL) of 7200 ms.
  This means that the tokens will be stored in the user's web browser for a
  maximum of 7200 milliseconds (or two hours) before they expire and need to be
  refreshed.
- Most components are lazy-loaded using next/dynamic to improve performance.
- The [Sentry](https://sentry.io/welcome/) error component will be able to catch
  and handle errors in the frontend code, providing us with detailed information
  about the errors and help us diagnose and fix issues quickly.
