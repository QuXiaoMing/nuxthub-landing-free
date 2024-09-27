import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxtjs/robots' // 添加这个模块
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
    baseURL: '/', // 确保这与你的 Cloudflare Pages 设置匹配
    buildAssetsDir: '/_nuxt/', // 这是默认值，你可以根据需要更改
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    static: true,
  },

  vite: {
    build: {
      assetsDir: '/_nuxt', // 确保这与 app.buildAssetsDir 匹配
    },
  },

  compatibilityDate: '2024-09-26',
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  image: {
    dir: 'assets/images',
    // 你可以添加更多图片优化配置
  },

  googleFonts: {
    families: {
      Inter: [400, 700],
      // 添加其他你需要的字体
    },
    display: 'swap',
    preload: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
})

