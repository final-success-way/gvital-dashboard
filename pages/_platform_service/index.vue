<template>
  <div class="container mx-auto lg:max-w-6xl mb-4 mt-12 capitalize">
    <div v-if="services.length > 0">
      <ol
        vocab="http://schema.org/"
        typeof="BreadcrumbList"
        class="list-none m-0 flex px-4 lg:px-0 mt-6"
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
      <h3
        class="container text-center lg:text-left mx-auto lg:max-w-6xl font-bold text-3xl mb-4 mt-12 mb-12 capitalize"
      >
        Buy
        {{
          services[0] &&
          services[0].platform &&
          services[0].platform.name.toLowerCase()
        }}
        Services
      </h3>

      <div class="flex flex-col bg-white border rounded-lg w-full">
        <div class="flex rounded-t-lg overflow-hidden w-full h-auto">
          <div
            class="hidden lg:block border-r border-b py-4 px-8 font-medium w-1/5"
          >
            {{
              services[0] &&
              services[0].platform &&
              services[0].platform.name.toLowerCase()
            }}
            Services
          </div>
          <div
            class="flex overflow-x-scroll justify-between lg:justify-start border-b w-full lg:w-4/5 p-2"
          >
            <button
              class="capitalize border-none outline-none mr-4 lg:mx-4 px-8 py-1 text-sm rounded-lg cursor-pointer"
              @click.stop="setSelectedService(service)"
              :class="
                selected.uid === service.uid
                  ? 'bg-yellow_bg'
                  : 'bg-primary text-white'
              "
              v-for="(service, idx) in services"
            >
              {{ service.name }}
            </button>
          </div>
        </div>
        <div class="flex">
          <div
            v-if="selected"
            class="w-full justify-center p-8 flex flex-col lg:flex-row"
          >
            <div class="flex-1">
              <form @submit.prevent="createOrder" class="">
                <div class="w-full">
                  <label class="font-medium text-sm"
                    >Select your product
                    <span class="ml-1 text-star">*</span></label
                  >
                  <services-list
                    :products="selected.varients"
                    :productx="varient"
                    :service="selected"
                    @change="changeSelectedProduct"
                  />
                </div>
                <div class="w-full">
                  <div class="my-2 w-full flex items-center">
                    <input
                      type="text"
                      v-model="link"
                      required
                      autocomplete="on"
                      @input="clearWarning"
                      class="w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                      placeholder="Enter link here"
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
                      v-model="
                        $auth.user && $auth.user[0] && $auth.user[0].email
                      "
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
              <h3
                class="font-medium text-2xl capitalize mt-6 mb-2"
                v-if="selected.varients[0]"
              >
                What benefits will I see if I buy<br class="hidden lg:block" />
                {{ selected.platform.name.toLowerCase() }}
                <span>{{ selected.name }}</span
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
                  <p class="mb-0 ml-3 text-xs">
                    Helps increase your engagement
                  </p>
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
              <div class="text-sm flex flex-col justify-center">
                <div class="flex">
                  <img
                    src="~/assets/star.svg"
                    alt="review-star"
                    class="h-5 mr-2"
                  />
                  <img
                    src="~/assets/star.svg"
                    alt="review-star"
                    class="h-5 mr-2"
                  />
                  <img
                    src="~/assets/star.svg"
                    alt="review-star"
                    class="h-5 mr-2"
                  />
                  <img
                    src="~/assets/star.svg"
                    alt="review-star"
                    class="h-5 mr-2"
                  />
                  <img
                    src="~/assets/star.svg"
                    alt="review-star"
                    class="h-5 mr-4"
                  />
                </div>
                <p
                  class="mb-0 vertical-middle leading-7 text-xs text-secondary"
                >
                  Over 1,300+ customers have rated BuyRealFollows 5 star
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="blog_content container mx-auto px-8 lg:max-w-6xl mb-4 mt-12"
        v-html="selected.platform.content"
      ></div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div v-for="(service, idx) in services" :key="idx" class="my-12 px-4">
          <div class="capitalize font-medium text-xl flex py-4">
            <a
              :href="'/' + service.platform.slug + '/' + service.slug"
              class="text-primary"
            >
              {{ service.platform.name.toLowerCase() }} {{ service.name }}
            </a>
          </div>

          <table class="table-auto w-full h-full m-0">
            <thead>
              <tr>
                <th
                  class="w-1/2 px-4 py-3 font-medium rounded rounded-t border-t border-l border-r border-b"
                >
                  <p class="text-primary float-left">Product</p>
                </th>
                <th
                  class="w-1/4 px-4 font-medium text-primary border-t border-r border-b"
                >
                  <span class="float-left">Price</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(varient, iidx) in service.varients"
                :key="iidx"
                class="relative my-4 text-sm"
              >
                <td class="border px-4 py-2">
                  <a
                    v-if="$route.params['product_city_name']"
                    :href="
                      '/' +
                      service.platform.slug +
                      '/' +
                      $route.params['product_city_name'] +
                      '/' +
                      service.slug
                    "
                    class="m-0"
                  >
                    {{ varient.quantity }} {{ service.name.toLowerCase() }}</a
                  >
                  <a
                    v-else
                    :href="'/' + service.platform.slug + '/' + service.slug"
                    class="m-0"
                  >
                    {{ varient.quantity }} {{ service.name.toLowerCase() }}</a
                  >
                  <span
                    class="ml-4 text-primary"
                    v-if="varient.percent_discount !== '0'"
                    >{{ varient.percent_discount }}% Off</span
                  >
                </td>
                <td class="border px-4 py-2 relative">
                  <span
                    class="line-through font-medium"
                    v-if="varient.percent_discount !== '0'"
                    >${{ varient.original_price }}</span
                  >
                  <span
                    class="text-primary font-medium"
                    :class="varient.percent_discount !== '0' ? '' : 'mb-4'"
                    >{{
                      varient.discounted_price == '0'
                        ? 'Free'
                        : '$' + varient.discounted_price
                    }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-else
      class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
    >
      <div class="h-16 w-16 mb-4">
        <svg-icon name="error" class="h-16 w-16" />
      </div>
      <h3 class="font-bold text-3xl text-center">Platform Doesn't exist</h3>
      <div class="border-t-dim h-1 w-full my-6"></div>
      <div class="pt-8">
        <h3 class="font-medium text-sm mb-4 text-center">
          You can checkout our other services by clicking the button below
        </h3>
        <button
          class="w-full bg-primary py-3 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
        >
          <a href="/">Discover Services</a>
        </button>
      </div>
    </div>
    <modal-payment
      v-if="capturePayment"
      :crypto="parseInt(varient.discounted_price) >= 2"
      :order="order_id"
      :active_stripe="active_stripe"
      :product="`${this.capitalizeFirstLetter(
        this.selected.platform.name.toLowerCase()
      )} ${this.selected.name}`"
      :email="email || ($auth.user && $auth.user[0].email)"
      @close="closeDialog"
    />
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
    if (params && params.hasOwnProperty('platform_service')) {
      const resp = await $axios.get('platform-services-list/', {
        params: { slug: params['platform_service'] },
      })
      if (resp && !resp.isAxiosError) {
        return {
          host: req?.headers.host,
          services: resp.data && resp.data.results,
          selected:
            resp.data && resp.data.results && resp.data.results.length > 0
              ? resp.data.results[0]
              : null,
          varient:
            resp.data && resp.data.results && resp.data.results.length > 0
              ? resp.data.results[0].varients[0]
              : false,
        }
      }
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
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
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: '',
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: `https://${this.host}/banner.webp`,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://${this.host}${this.$route.fullPath}`,
        },
        { hid: 'og:image', property: 'og:image', content: '/icon.webp' },
        {
          hid: 'og:description',
          name: 'og:description',
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
            ? `https://${this.host}${this.$route.fullPath}`
            : `https://www.${this.host}${this.$route.fullPath}`,
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://api.buyrealfollows.com' },
      ],
    }
  },
  computed: {
    titleFiltered() {
      if (this.services && this.services.length > 0) {
        return `${
          this.services[0] &&
          this.services[0].platform &&
          this.services[0].platform.name.toLowerCase()
        } Services`
      }
      return 'Instagram Services'
    },
    title() {
      if (this.services && this.services.length > 0) {
        return `Buy
      ${
        this.services[0] &&
        this.services[0].platform &&
        this.services[0].platform.name.toLowerCase()
      } Services, Cheap ${
          this.services[0] &&
          this.services[0].platform &&
          this.services[0].platform.name.toLowerCase()
        } - Buy Real Follows`
      }
      return 'Buy Instagram Services, Cheap Instagram Services - Buy Real Follows'
    },
    breadCrumbs() {
      return [
        {
          url: `https://${this.host}`,
          text: 'Home',
        },
        {
          url: `https://${this.host}${this.$route.path}`,
          text: this.titleFiltered,
        },
      ]
    },
  },
  data: () => ({
    loading: false,
    placeholder: '',
    message: '',
    errorMessage: '',
    link: null,
    email: null,
    orderPlaced: false,
    order_id: null,
    capturePayment: false,
    selected: null,
    services: [],
    varient: null,
    active_stripe: null,
  }),

  jsonld() {
    const items = this.breadCrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.text,
      },
    }))
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      if (string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
      return ''
    },
    setSelectedService(service) {
      this.selected = service
      this.varient =
        service && service.varients && service.varients.length > 0
          ? service.varients[0]
          : false
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
          meta: this.link,
          email: this.email || (this.$auth.user && this.$auth.user[0].email),
          product_id: this.varient['uid'],
          selected: this.selected.toString(),
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
        //this.error = e.response.data.message
        this.loading = false
        this.orderPlaced = false
        const { data } = e.response
        this.errorMessage = data && data.message
      }
    },
  },
}
</script>

<style>
.blog_content h2 {
  font-weight: 600;
  color: #5347e3;
  font-size: 1.5rem;
  z-index: 998;
  line-height: 46px;
}
.blog_content h3 {
  font-weight: 500;
  color: #5347e3;
  font-size: 1.5rem;
  z-index: 998;
  line-height: 2rem;
}
.blog_content h4 {
  font-weight: 400;
  color: #5347e3;
  border-left: 3px solid #5347e3;
  padding-left: 8px;
  font-size: 1.2rem;
  z-index: 998;
  line-height: 2rem;
}
.blog_content img {
  border-radius: 0.5rem;
  margin: 32px auto;
}
.blog_content p {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin: 12px 0;
  color: #5b6b82;
}
.blog_content .font-bold {
  font-weight: 600;
}

.blog_content h1 {
  font-size: 1.5rem;
  z-index: 998;
  line-height: 46px;
  color: #5347e3;
}

.blog_content ul li {
  font-weight: 400;
  font-size: 1rem;
  color: #5b6b82;
  line-height: 1.82;
  padding-bottom: 10px;
}

.text ul li {
  font-weight: 400;
  font-size: 16px;
  color: #5b6b82;
  line-height: 1.82;
  letter-spacing: -0.015em;
}
</style>
