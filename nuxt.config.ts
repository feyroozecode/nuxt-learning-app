// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    title: 'شبكة اجتماعية للطلاب العرب',
    description: ' تواصل مع طلاب جامعتك واحصل على المساعدة في الدراسة',
    background: '#f5f5f5',
    head: {
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap'
        },
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' 
        }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  buildModules: ['@nuxt/typescript-build'],
  css: ['@/assets/css/main.css'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/colors.sass" as *'
        }
      }
    }
  }
})
