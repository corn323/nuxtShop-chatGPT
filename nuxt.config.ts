import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  typescript: {
    strict: true,
    shim: false
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
});
