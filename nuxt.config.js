const googleRegex = /^cache:[^:]+:(.+)/
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head

  // Global CSS: https://go.nuxtjs.dev/config-css
  mode: 'universal',
  target: 'server',
  css: [],
  head: {
    title: 'BuyRealFollows',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'google-site-verification', content: 'EpWSifqNR7HjtCN0olBFcIka8W7-4P_c8m2JRl0-Qeo' }
    ],
    script: [
      { type: 'text/javascript', async: true, src: '/twak.js' },
    ]
  },

  loading: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-moment', mode: 'server' },
    { src: '@/plugins/v-click-outside', mode: 'client' },
    { src: '@/plugins/vue-slick', mode: 'client' },
    { src: '@/plugins/jsonld', mode: 'server' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg-sprite',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-analytics',
    ['vue-router-webcache/nuxt', {
      cacheList: [{
        hostname: 'yandexwebcache.net',
        pathname: '/yandbtm',
        getRealUrl: (url) => {
          const parsed = new URL(url)

          return parsed.searchParams.get('url')
        }
      },
        {
          hostname: 'webcache.googleusercontent.com',
          pathname: '/search',
          getRealUrl: (url) => {
            const parsed = new URL(url)
            const q = parsed.searchParams.get('q')

            const matched = q.match(googleRegex)

            if (!matched) throw new Error(`Can't extract realUrl from "${url}"`)

            const extracted = matched[1].trim()

            if (!extracted.startsWith('https://')) return `http://${extracted}`

            return extracted
          }
        }]
    }],
    ['@nuxtjs/router', {
      keepDefaultRouter: true
    }]
  ],
  hooks: {
    'build:done'() {
      const modulesToClear = ['vue', 'vue/dist/vue.runtime.common.prod']
      modulesToClear.forEach((entry) => {
        delete require.cache[require.resolve(entry)]
      })
    },
  },

  generate: {
    workers: 4,
    workerConcurrency: 500,
    concurrency: 500,
    interval: 400,
    savePayload: false,
    done ({ duration, errors, workerInfo }) {
      console.log(duration,errors,workerInfo)
    },
    dir: 'public'
  },

  build: {
    html: {
      minify: {
        removeOptionalTags: false,
        keepClosingSlash: true
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth',
    '@nuxt/http'
  ],
  serverMiddleware: [
    '~/serverMiddleware/redirects'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'UA-55374899-1',
      autoTracking: {
        pageviewview: true
      },
      debug: {
        sendHitTask: true
      }
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login/',
            method: 'post',
            propertyName: 'token',
            altProperty: 'token'
          },
          user: { url: '/user/', method: 'get', propertyName: 'results' },
          logout: false
        },
        tokenRequired: true,
        tokenType: 'Token'
      }
    },

    redirect: {
      home: '/dashboard'
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  http: {
    baseURL: 'https://api.buyrealfollows.com'
    //baseURL: 'http://localhost:8000'
  },
  axios: {
    baseURL: 'https://api.buyrealfollows.com'
    //baseURL: 'http://localhost:8000'
  },
  router: {
    linkExactActiveClass: 'active-link'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {}
}

// setInterval(() => {
//   const { heapUsed: used, rss, heapTotal: tot, external: ext } = process.memoryUsage()
//   const f = (value) => (!value ? '-' : `${Math.round(value / 1048576)} MB`)
//
//   console.log(
//     `[${new Date().toTimeString().substr(0, 8)}] Memory usage: ${f(used)} (RSS: ${f(rss)}) - total heap: ${f(
//       tot
//     )} - external: ${f(ext)}`
//   )
// }, 10000)
