<template>
  <div>
    <div class="site container mx-auto px-8 lg:max-w-6xl bg-white pt-8">
      <header class="site-header flex justify-between items-center relative">
        <div class="site-branding">
          <a href="/">
            <img
              src="../assets/logo_header.svg"
              alt="Buy real follows logo"
              class="h-14 mt-4"
            />
          </a>
        </div>
        <img
          src="../assets/menu.svg"
          @click="showPremiumMenuMob = true"
          class="block lg:hidden h-4 lg:ml-0"
        />
        <nav class="hidden lg:flex">
          <div class="hidden lg:block menu-primary-container">
            <ul
              id="primary-menu"
              class="m-0 flex list-none items-center text-sm font-normal nav-menu"
            >
              <li
                id="menu-item-21"
                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-21"
              >
                <a href="/">Home</a>
              </li>
              <dropdown-header :platforms="platforms" />
              <li
                v-if="!$auth.user"
                id="menu-item-19"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
              >
                <a href="/login">Login</a>
              </li>

              <a
                v-if="!$auth.user"
                id="menu-item-20"
                class="menu-item menu-item-type-post_type menu-item-object-page register-btn"
                href="/register"
                >Register</a
              >
              <a
                v-else
                id="menu-item-31"
                class="font-normal text-primary menu-item menu-item-type-post_type menu-item-object-page menu-item-31 text-primary"
                href="/dashboard"
                >My Dashboard</a
              >
            </ul>
          </div>
        </nav>
      </header>
      <div>
        <div>
          <h3
            class="container text-center mx-auto px-8 lg:max-w-6xl font-bold text-3xl mb-4 mt-12 capitalize"
          >
            Frequently Asked Questions
          </h3>
          <p class="text-center text-sm font-light px-8 lg:px-0">
            Here are answers to our most commonly asked questions. If you cannot
            find an answer here, send us an email/contact us:
          </p>
        </div>
        <div class="flex justify-center flex-col mt-12">
          <div v-for="(faqItem, idx) in faqs">
            <h3 class="text-xl font-medium underline">
              {{ faqItem.question }}
            </h3>
            <div class="relative">
              <h4 class="font-normal text-sm my-6">{{ faqItem.answer }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dim mt-16 lg:mt-48 py-16">
      <div class="container mx-auto px-8 lg:px-0 lg:max-w-6xl relative">
        <!--          <h2 class="text-3xl lg:text-5xl font-medium capitalize leading-tight mb-6">Services</h2>-->
        <!--          <h3 class="font-medium text-sm m-0">Facebook</h3>-->
        <!--          <p></p>-->
        <!--          <h3 class="font-medium text-sm m-0">Instagram</h3>-->
        <!--          <p></p>-->
        <!--          <h3 class="font-medium text-sm m-0">Youtube</h3>-->
        <!--          <p></p>-->

        <div class="footer py-16 flex flex-col lg:flex-row">
          <div class="lg:w-1/2">
            <p class="font-extrabold text-3xl lg:text-5xl">
              BuyReal<span class="text-primary">Follows.</span>
            </p>
            <p class="m-0 text-sm leading-loose">
              There are companies out there that can help relieve some of the
              pressure of<br />developing your Instagram presence, like us,
              Buyrealfollows! In fact, we’re seriously<br />helping our clients
              by offering Instagram followers for free! That’s right–free!<br />With
              such a great deal you might be thinking, what’s the catch?
            </p>
          </div>
          <div class="lg:w-1/2 flex lg:justify-between mt-16">
            <ul class="list-none m-0 mr-16 lg:mr-0">
              <li>
                <h3 class="font-medium mb-4">Services</h3>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/instagram-services"
                  >Instagram</a
                >
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/youtube-services"
                  >Youtube</a
                >
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/spotify-services"
                  >Spotify</a
                >
              </li>
            </ul>
            <ul class="list-none m-0">
              <li>
                <h3 class="font-medium mb-4">Support</h3>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/contact">Contact</a>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/register">Signup</a>
              </li>
              <!--                <li class="my-2">-->
              <!--                  <a class="font-light text-sm" href="">Affiliates</a>-->
              <!--                </li>-->
              <!--                <li class="my-2">-->
              <!--                  <a class="font-light text-sm" href="">Support Email</a>-->
              <!--                </li>-->
            </ul>
            <ul class="hidden lg:block list-none m-0">
              <li>
                <h3 class="font-medium mb-4">BuyRealFollows</h3>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/about">About us</a>
              </li>
              <!--              <li class="my-2">-->
              <!--                <a class="font-light text-sm" href="/privacy">Privacy Policy</a>-->
              <!--              </li>-->
              <li class="my-2">
                <a class="font-light text-sm" href="/terms"
                  >Terms and conditions</a
                >
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
          <ul class="block lg:hidden list-none m-0 mt-8 lg:mt-0">
            <li>
              <h3 class="font-medium mb-4">BuyRealFollows</h3>
            </li>
            <li class="my-2">
              <a class="font-light text-sm" href="/about">About us</a>
            </li>
            <!--            <li class="my-2">-->
            <!--              <a class="font-light text-sm" href="/privacy">Privacy Policy</a>-->
            <!--            </li>-->
            <li class="my-2">
              <a class="font-light text-sm" href="/terms"
                >Terms and conditions</a
              >
            </li>
            <li class="my-2">
              <a class="font-light text-sm" href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-4 bg-primary text-white">
      <p class="text-center text-sm font-medium text-white">
        Copyright © 2022 BuyRealFollows LLC. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
import DropdownHeader from '~/components/DropdownHeader'

export default {
  name: 'faq',
  components: { DropdownHeader },
  data: () => ({
    platforms: [],
    faqs: [],
  }),
  computed: {
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
  },
  async asyncData({ $axios, req }) {
    const resp = await $axios.get('platform-list/')
    if (resp && !resp.isAxiosError) {
      return {
        host: req?.headers.host,
        platforms: resp.data && resp.data.results,
        faqs: resp.data && resp.data.results[0].services[0].faqs,
      }
    }
  },
  head() {
    return {
      title:
        'Faq | Buy Instagram Followers, Twitter Followers and YouTube Subscribers - Buy Real Follows',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Buy real follows provide cheapest instagram followers, instagram likes, youtube likes, youtube subscribers, facebook likes and more. Check our cheapest service with the best rates in the market. Services start instantly and 24 Hrs customer supports.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'buy instagram followers, instagram followers, instagram likes, buy instagram likes, buy followers, buy real follows, buying instagram followers, instagram followers buy, likes on instagram, buy real instagram followers, buy real instagram likes, buy instagram power likes, buy ig followers, buy likes instagram, buy likes on instagram, cheap instagram followers, buy followers on instagram,  get instagram likes, buy instagram followers cheap, real instagram followers, buy ig views, buying instagram video views, buy twitter followers, twitter followers, twitter likes, buy twitter likes, buy real follows on twitter, buying twitter followers, twitter followers buy, likes on twitter, buy real twitter followers, buy real twitter likes, buy likes on twitter, cheap twitter followers, buy followers on twitter,  get twitter likes, buy twitter followers cheap, real twitter followers, buying twitter video views, buy youtube likes, youtube likes, buy real follows on youtube, buying youtube likes, youtube likes buy, likes on youtube, buy real youtube likes, buy real youtube likes, cheap youtube likes, buy likes on youtube,  get youtube likes, buy youtube likes cheap, real youtube likes, buying youtube video views, buy youtube subscribers, youtube subscribers, buying youtube subscribers, youtube subscribers buy, subscribers on youtube, buy real youtube subscribers, buy real youtube subscribers, cheap youtube subscribers, buy subscribers on youtube,  get youtube subscribers, buy youtube subscribers cheap, real youtube subscribers ',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Buy Instagram Followers, Twitter Followers and YouTube Subscribers - Buy Real Follows',
        },
        { hid: 'og:image', property: 'og:image', content: '/banner.webp' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Buy real follows provide cheapest instagram followers, instagram likes, youtube likes, youtube subscribers, facebook likes and more. Check our cheapest service with the best rates in the market. Services start instantly and 24 Hrs customer supports.',
        },
        {
          hid: 'og:keywords',
          name: 'og:keywords',
          content:
            'buy instagram followers, instagram followers, instagram likes, buy instagram likes, buy followers, buy real follows, buying instagram followers, instagram followers buy, likes on instagram, buy real instagram followers, buy real instagram likes, buy instagram power likes, buy ig followers, buy likes instagram, buy likes on instagram, cheap instagram followers, buy followers on instagram,  get instagram likes, buy instagram followers cheap, real instagram followers, buy ig views, buying instagram video views, buy twitter followers, twitter followers, twitter likes, buy twitter likes, buy real follows on twitter, buying twitter followers, twitter followers buy, likes on twitter, buy real twitter followers, buy real twitter likes, buy likes on twitter, cheap twitter followers, buy followers on twitter,  get twitter likes, buy twitter followers cheap, real twitter followers, buying twitter video views, buy youtube likes, youtube likes, buy real follows on youtube, buying youtube likes, youtube likes buy, likes on youtube, buy real youtube likes, buy real youtube likes, cheap youtube likes, buy likes on youtube,  get youtube likes, buy youtube likes cheap, real youtube likes, buying youtube video views, buy youtube subscribers, youtube subscribers, buying youtube subscribers, youtube subscribers buy, subscribers on youtube, buy real youtube subscribers, buy real youtube subscribers, cheap youtube subscribers, buy subscribers on youtube,  get youtube subscribers, buy youtube subscribers cheap, real youtube subscribers',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `https://${this.host}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: this.host.includes('www')
            ? `https://${this.host}/faq`
            : `https://www.${this.host}/faq`,
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://api.buyrealfollows.com' },
      ],
      script: [
        {
          async: true,
          type: 'text/javascript',
          src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: this.faqJSONLD,
          },
        },
      ], //G-0395XL210H
    }
  },
}
</script>

<style scoped></style>
