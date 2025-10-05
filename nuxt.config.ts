// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false, // 禁用伺服器端渲染，僅生成靜態頁面
  app: {
    baseURL: '/nuxt-static-playground/', // 設定你的 GitHub 儲存庫名稱
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/test-utils'
  ]
})