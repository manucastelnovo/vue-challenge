// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt",'@pinia-plugin-persistedstate/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false, // [!code ++]
    },
  ],
})

