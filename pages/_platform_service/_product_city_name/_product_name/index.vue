<template>
  <div v-if="service">
    <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      class="list-none flex container mx-auto lg:max-w-6xl px-4 lg:px-8 mt-6"
    >
      <li
        property="itemListElement"
        typeof="ListItem"
        v-for="(breadCrumb, idx) in breadCrumbs"
      >
        <a
          :href="breadCrumb.url"
          class="text-sm font-base m-0"
          property="item"
          typeof="WebPage"
        >
          <span property="name">{{ breadCrumb.text }}</span>
        </a>
        <span v-if="idx < breadCrumbs.length - 1" class="mr-2">/</span>
        <meta property="position" :content="idx + 1" />
      </li>
    </ol>
    <h1
      class="container text-center mx-auto px-8 lg:max-w-6xl font-bold text-3xl mb-4 mt-12 capitalize"
    >
      Buy
      {{ serviceName }}
    </h1>
    <h2 class="m-0 text-xs text-center my-2">{{ serviceMessage }}</h2>
    <transition name="fade">
      <p
        v-if="errorMessage"
        class="container mx-auto px-4 lg:px-8 lg:max-w-3xl text-xs bg-youtube_bg p-4 rounded-lg font-medium text-youtube text-center my-4"
      >
        {{ errorMessage }}.
      </p>
    </transition>
    <div
      class="container mx-auto px-4 lg:px-8 lg:max-w-6xl flex flex-col lg:flex-row mt-8 mb-40 justify-between"
    >
      <div class="flex-1">
        <form
          @submit.prevent="createOrder"
          class="border rounded-lg p-4 lg:p-8"
        >
          <div class="w-full">
            <label class="font-medium text-sm"
              >Select your product <span class="ml-1 text-star">*</span></label
            >
            <services-list
              :products="service.varients"
              :productx="varient"
              :service="service"
              @change="changeSelectedProduct"
            />
          </div>
          <div class="w-full">
            <div class="my-2 w-full flex items-center">
              <input
                type="text"
                v-model="username"
                required
                autocomplete="on"
                @input="clearWarning"
                class="w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                :placeholder="
                  service.link_placeholder.length > 0
                    ? service.link_placeholder
                    : 'Enter link'
                "
              />
            </div>
          </div>
          <div class="w-full">
            <div class="my-2 w-full flex items-center">
              <input
                type="email"
                v-model="email"
                required
                autocomplete="on"
                v-if="!$auth.user"
                @input="clearWarning"
                class="w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                placeholder="Enter your email here"
              />
              <input
                type="email"
                v-model="$auth.user && $auth.user[0] && $auth.user[0].email"
                required
                v-else
                disabled
                autocomplete="on"
                @input="clearWarning"
                class="hidden w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                placeholder="Enter your email here"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-1 lg:gap-2 my-4">
            <div class="text-xs lg:text-sm">
              <img
                src="~/assets/tick_gr.svg"
                class="h-4 my-2 inline mr-2 lg:mr-4"
              />Guaranteed Delivery
            </div>
            <div class="text-xs lg:text-sm">
              <img
                src="~/assets/shield.svg"
                class="h-4 my-2 inline mr-2 lg:mr-4"
              />100% Safe & Private
            </div>
            <div class="text-xs lg:text-sm">
              <img
                src="~/assets/lock.svg"
                class="h-4 my-2 inline mr-2 lg:mr-4"
              />No Password Required
            </div>
            <div class="text-xs lg:text-sm">
              <img
                src="~/assets/phone.svg"
                class="h-4 my-2 inline mr-2 lg:mr-4"
              />24/7 Support
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
          >
            <span v-if="!loading">Buy Now</span>
            <loader-small v-else />
          </button>
          <div class="mt-4 flex justify-between">
            <span class="text-xs lg:text-sm">We accept</span>
            <div class="flex items-center">
              <img src="~/assets/mastercard@2x.webp" class="h-4 lg:h-6" />
              <img src="~/assets/bitcoin.svg" class="h-8 lg:h-8 mx-3" />
              <img src="~/assets/discover@2x.webp" class="h-3 lg:h-4" />
              <img
                src="~/assets/american-express@2x.webp"
                class="h-3 lg:h-4 mx-3"
              />
              <img src="~/assets/visa@2x.webp" class="h-3 lg:h-4" />
            </div>
          </div>
        </form>
      </div>
      <div class="flex-1 flex-col lg:pl-16">
        <h3 class="font-medium text-2xl capitalize mt-6 mb-2" v-if="varient">
          What benefits will I see if I buy<br class="hidden lg:block" />
          {{ service && service.platform.name.toLowerCase() }}
          <span v-if="$route.path.includes('services')">services</span>
          <span v-else>{{ service.name }}</span
          >?
        </h3>
        <ul class="list-none m-0 mb-8">
          <li class="flex items-center my-2">
            <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
            <p class="mb-0 ml-3 text-xs">
              Brings credibility and recognition to your profile
            </p>
          </li>
          <li class="flex items-center my-2">
            <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
            <p class="mb-0 ml-3 text-xs">Promotes new & organic growth</p>
          </li>
          <li class="flex items-center my-2">
            <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
            <p class="mb-0 ml-3 text-xs">Helps increase your engagement</p>
          </li>
          <li class="flex items-center my-2">
            <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
            <p class="mb-0 ml-3 text-xs">
              Orders are delivered within 24-72 hours
            </p>
          </li>
          <li class="flex items-center my-2">
            <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
            <p class="mb-0 ml-3 text-xs">
              Buyrealfollows will always deliver more than you purchased
            </p>
          </li>
        </ul>
        <h3 class="text-sm flex flex-col justify-center">
          <div class="flex">
            <img src="~/assets/star.svg" class="h-5 mr-2" />
            <img src="~/assets/star.svg" class="h-5 mr-2" />
            <img src="~/assets/star.svg" class="h-5 mr-2" />
            <img src="~/assets/star.svg" class="h-5 mr-2" />
            <img src="~/assets/star.svg" class="h-5 mr-4" />
          </div>
          <p class="mb-0 vertical-middle leading-7 text-xs text-secondary">
            Over 1,300+ customers have rated BuyRealFollows 5 star
          </p>
        </h3>
      </div>
    </div>
    <modal-payment
      v-if="capturePayment"
      :crypto="varient && parseInt(varient.discounted_price) >= 2"
      :order="order_id"
      :redirect_url="$route.fullPath"
      :active_stripe="active_stripe"
      :product="`${this.capitalizeFirstLetter(
        this.service.platform.name.toLowerCase()
      )} ${this.service.name}`"
      :email="email || ($auth.user && $auth.user[0].email)"
      @close="closeDialog"
    />
  </div>
  <div
    v-else
    class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
  >
    <div class="h-16 w-16 mb-4">
      <svg-icon name="error" class="h-16 w-16" />
    </div>
    <h3 class="font-bold text-3xl text-center">Product Not Found</h3>
    <div class="border-t-dim h-1 w-full my-6"></div>
    <div class="pt-8">
      <h3 class="font-medium text-sm mb-4 text-center">
        You can checkout other products by clicking the button below
      </h3>
      <button
        class="w-full bg-primary text-xs py-3 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
      >
        <a href="/">Discover Products</a>
      </button>
    </div>
  </div>
</template>

<script>
import ModalPayment from '@/components/ModalPayment'
import LoaderSmall from '@/components/LoaderSmall'
import ServicesList from '@/components/ServicesList'

export default {
  name: 'index',
  components: {
    ServicesList,
    ModalPayment,
    LoaderSmall,
  },
  async asyncData({ $axios, route, req }) {
    const { params, query } = route
    const resp = await $axios.get(
      'platform-services-list/',
      { params: { slug: params['product_name'] } },
      { timeout: 1000 }
    )
    if (resp && !resp.isAxiosError) {
      return {
        host: req?.headers.host,
        service:
          resp.data && resp.data.results.length > 0 && resp.data.results[0],
        varient:
          resp.data &&
          resp.data.results.length > 0 &&
          resp.data.results[0] &&
          resp.data.results[0].varients[0],
        faqs:
          resp.data &&
          resp.data.results.length > 0 &&
          resp.data.results[0].faqs,
        placeholder: 'Enter link',
      }
    }
  },
  computed: {
    serviceMessage() {
      return `Buy ${this.capitalizeFirstLetter(
        this.service &&
          this.service.platform &&
          this.service.platform?.name?.toLowerCase()
      )}  ${this.service.name} with Instant Delivery`
    },
    serviceName() {
      if (this.service) {
        if (
          this.$route.params.product_city_name &&
          this.$route.params.product_city_name.length > 0
        ) {
          return `${this.capitalizeFirstLetter(
            this.service &&
              this.service.platform &&
              this.service?.platform.name?.toLowerCase()
          )} ${this.service.name} in ${this.$route.params.product_city_name
            .split('-')
            .join(' ')}`
        }
        return `${this.capitalizeFirstLetter(
          this.service &&
            this.service.platform &&
            this.service?.platform.name?.toLowerCase()
        )} ${this.service.name}`
      }
      return 'Instagram Followers'
    },
    titleFiltered() {
      if (this.varient) {
        return `${this.capitalizeFirstLetter(
          this.service &&
            this.service.platform &&
            this.service.platform?.name?.toLowerCase()
        )} ${this.service.name}`
      }
      return 'Instagram Followers'
    },
    title() {
      if (this.varient) {
        return `${this.service.seo_title}`
      }
      return 'BuyRealFollows | Buy Instagram Followers'
    },
    faqJSONLD() {
      return this.faqs.map((faq) => {
        return {
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        }
      })
    },
    productReview() {
      if (this.service && this.services.length === 0) {
        return {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: `${this.service.seo_title} | Now $${this.varient?.discounted_price}`,
            image: [`https://${this.host}/icon.webp`],
            description: this.service.seo_description,
            brand: {
              '@type': 'Brand',
              name: 'Buyrealfollows',
            },
            review: {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: this.service?.review?.rating || 4,
                bestRating: '5',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.5',
              reviewCount: '1300',
            },
            offers: {
              '@type': 'Offer',
              url: `https://${this.host}/${this.service.platform.slug}/${this.service.slug}`,
              priceCurrency: 'USD',
              priceValidUntil: '2025-08-09',
              price: this.varient?.discounted_price,
              availability: 'https://schema.org/InStock',
            },
          },
        }
      }
      return ''
    },
    breadCrumbsList() {
      const items = this.breadCrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item.text,
        },
      }))
      return {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org/',
          '@type': 'BreadcrumbList',
          itemListElement: items,
        },
      }
    },
    breadCrumbs() {
      return [
        {
          text: 'Home',
          url: `https://${this.host}`,
        },
        {
          text: `${this.capitalizeFirstLetter(
            this.$route.params.platform_service.split('-').join(' ')
          )}`,
          url: `https://${this.host}/${
            this.service && this.service.platform && this.service.platform.slug
          }`,
        },
        {
          text: `${this.capitalizeFirstLetter(
            this.$route.params.product_city_name
          )}`,
          url: `https://${this.host}/${
            this.service && this.service.platform && this.service.platform.slug
          }/${this.$route.params.product_city_name}`,
        },
        {
          text: `${this.capitalizeFirstLetter(
            this.service &&
              this.service.platform &&
              this.service.platform?.name.toLowerCase()
          )} ${this.service.name}`,
          url: `https://${this.host}/${
            this.service && this.service.platform && this.service.platform.slug
          }/${this.$route.params.product_city_name}/${
            this.service && this.service.slug
          }`,
        },
      ]
    },
  },
  head() {
    return {
      title: this.service.seo_title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.service.seo_description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.service.seo_keywords,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `summary_large_image`,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@buyrealfollows1',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.service.seo_title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.service.seo_description,
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: `https://${this.host}/banner.webp`,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.service.seo_title,
        },
        { hid: 'og:image', property: 'og:image', content: '/banner.webp' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.service.seo_description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://${this.host}/${
            this.service && this.service.platform && this.service.platform.slug
          }/${this.$route.params.product_city_name}/${
            this.service && this.service.slug
          }`,
        },
        {
          hid: 'og:keywords',
          name: 'og:keywords',
          content: this.service.seo_keywords,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Buy Real Follows',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: this.host.includes('www')
            ? `https://${this.host}/${
                this.service &&
                this.service.platform &&
                this.service.platform.slug
              }/${this.$route.params.product_city_name}/${
                this.service && this.service.slug
              }`
            : `https://www.${this.host}/${
                this.service &&
                this.service.platform &&
                this.service.platform.slug
              }/${this.$route.params.product_city_name}/${
                this.service && this.service.slug
              }`,
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://api.buyrealfollows.com' },
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        },
        this.breadCrumbsList,
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: this.faqJSONLD,
          },
        },
        this.productReview,
      ], //G-0395XL210H
    }
  },
  data: () => ({
    loading: false,
    placeholder: '',
    message: '',
    errorMessage: '',
    username: null,
    email: null,
    orderPlaced: false,
    order_id: null,
    active_stripe: null,
    capturePayment: false,
    selection: [],
    service: {
      slug: '',
      seo_title: '',
      seo_description: '',
      platform: {
        name: '',
        slug: '',
      },
      review: {
        rating: '',
      },
    },
    varient: null,
    selected: null,
    services: [],
    faqs: [],
    common_regex:
      '[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)',
  }),
  methods: {
    capitalizeFirstLetter(string) {
      if (string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
      return ''
    },
    changeSelectedProduct(e) {
      this.errorMessage = null
      this.varient = e
    },
    closeDialog() {
      this.capturePayment = false
    },
    clearWarning() {
      this.error = null
      this.errorMessage = null
    },
    async createOrder() {
      this.loading = true
      this.current_order = localStorage.getItem('current_order')
      try {
        const resp = await this.$axios.$post('create-order/', {
          meta: this.username,
          full_name: '',
          email: this.email || (this.$auth.user && this.$auth.user[0].email),
          product_id: this.varient['uid'],
          selected: this.selection.toString(),
          current_order: this.current_order,
        })
        if (resp && resp.success) {
          if (resp.payment_url) {
            this.capturePayment = true
            this.order_id = resp.order_id
            this.active_stripe = resp.payment_url
            localStorage.setItem('current_order', resp.order_id)
          }
        } else {
          this.errorMessage = resp.message
        }
        this.loading = false
      } catch (e) {
        this.loading = false
        this.orderPlaced = false
        const { data } = e.response
        this.errorMessage = data && data.message
      }
    },
  },
  mounted() {
    const { params } = this.$route
    if (params && params['product_name']) {
      this.selected = params['product_name']
      this.service?.varients?.find((prod, idx) => {
        if (params['product_name'] === prod.uid) {
          this.placeholder = 'Enter link'
          return (this.varient = prod)
        }
      })
    }
  },
}
</script>

<style scoped></style>
