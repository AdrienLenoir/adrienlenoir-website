export default {
  server: {
    port: 7600,
  },

  serverMiddleware: {
    "/api": "~/api",
  },

  loading: {
    color: "white",
    height: "4px",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Adrien Lenoir - Développeur web",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:title",
        name: "og:title",
        content: "Adrien Lenoir - Développeur web",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "Adrien Lenoir - Développeur web",
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "Adrien Lenoir - Développeur web",
      },
      { name: "msapplication-TileColor", content: "#F9FCFF" },
      { name: "theme-color", content: "#F9FCFF" },
      { name: "robots", content: "all, index, follow" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/icon.png" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/style/style.scss",
    "locomotive-scroll/dist/locomotive-scroll.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client",
    },
    {
      src: "~/plugins/directives.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/common/",
    "~/components/sections/",
    "~/components/sections/me",
    "~/components/sections/portfolio",
    "~/components/admin/layout",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    ["nuxt-buefy", { css: false }],
    "cookie-universal-nuxt",
    "vue-sweetalert2/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://127.0.0.1:7600/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: true,
    },
  },
}
