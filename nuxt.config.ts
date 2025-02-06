// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || 'http://127.0.0.1:3333',
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  devServer: { host: '127.0.0.1', port: 3000 },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
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
  }
})
