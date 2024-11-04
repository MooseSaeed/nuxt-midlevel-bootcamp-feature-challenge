// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/icon", "@pinia/nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    preference: "dark",
  },
  tailwindcss: {
    config: {
      theme: {
        screens: {
          xs: "450px",
        },
      },
    },
  },
});
