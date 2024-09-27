// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'dark',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },
})
