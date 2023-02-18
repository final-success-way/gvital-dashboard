<template>
  <div>
    <div class="site container mx-auto lg:max-w-6xl bg-white pt-8 px-8 lg:px-0">
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
          @click="showDrawer = true"
          class="block lg:hidden h-4 lg:ml-0"
        />
        <nav class="hidden lg:flex">
          <div class="hidden lg:block menu-primary-container">
            <ul
              id="primary-menu"
              class="m-0 flex list-none items-center text-sm font-normal nav-menu"
            >
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
                class="ml-4 font-normal text-primary menu-item menu-item-type-post_type menu-item-object-page menu-item-31 text-primary"
                href="/dashboard"
                >My Dashboard</a
              >
            </ul>
          </div>
        </nav>
      </header>
    </div>
    <nuxt-child />
    <drawer-menu
      v-if="showDrawer"
      @close="closePremiumMenu"
      :platforms="platforms"
    />
    <div class="relative">
      <div class="content-top-bg-next"></div>
      <div id="faq" class="bg-primary relative pb-24">
        <div class="flex justify-center flex-col items-center">
          <img
            src="../assets/semi-circle.svg"
            class="hidden lg:block absolute top-0 left-0 w-26 translateY50p"
            alt="semi circle"
          />
          <h3 class="text-white text-center text-3xl my-4 font-medium">
            Frequently Asked Questions
          </h3>
          <p class="text-white text-center text-sm font-light px-8 lg:px-0">
            Here are answers to our most commonly asked questions. If you cannot
            find an answer here, send us an email/contact us:
          </p>
          <ul
            class="list-none lg:container lg:max-w-5xl ml-0 mt-16 px-8 lg:px-0"
          >
            <li
              class="lg:border-t-light pt-4 cursor-pointer"
              v-for="(faqItem, indx) in faqs"
            >
              <div
                class="accordion flex justify-between items-start"
                :class="faqItem.active ? 'active' : ''"
              >
                <h3 class="text-white font-medium">{{ faqItem.question }}</h3>
                <img
                  src="../assets/arrow_down.svg"
                  class="cursor-pointer h-8"
                />
              </div>
              <div
                class="panel text-white font-light text-sm"
                :style="faqItem.active ? 'max-height: fit-content' : ''"
              >
                <h4 class="light-text">{{ faqItem.answer }}</h4>
              </div>
            </li>
          </ul>
        </div>
        <img
          src="../assets/half_hex.svg"
          class="absolute bottom-0 right-0 w-26 lg:abs-middle"
        />
      </div>
      <div class="relative mt-16">
        <div
          class="container mx-auto lg:max-w-6xl flex flex-col-reverse lg:flex-row"
        >
          <div class="lg:w-1/2 px-8 lg:pl-8 flex pt-6 mt-8 items-top flex-col">
            <h3 class="font-medium text-2xl mb-6">
              9 Great Reasons to Buy Instagram<br class="hidden lg:block" />
              Followers
            </h3>
            <p class="font-light lg:text-sm mb-16 text-left">
              Engage, Enlighten, Encourage and especially…just be yourself!
              Social media is a community effort; everyone is an asset. – Susan
              Cooper The social media scene is constantly changing. Brand new
              apps and features seem to pop up overnight, and it’s a mad dash to
              get on these platforms and start adding and tagging your friends
              and family. But before you know it, some of these sites are all
              but forgotten. In 2010, the popular image-sharing platform,
              Instagram, was created. Though many doubted its long-term
              popularity, Instagram quickly took center stage as the latest
              social media craze. It was so well-received in fact, that the
              social-media-giant, Facebook, bought the site for a mere 1 billion
              dollars just two years after Instagram took off. Surely Facebook
              saw the potential of the platform as a means to connect and engage
              with the world, and with that transaction, it became clear that
              Instagram was here to stay.
            </p>
          </div>
          <div class="lg:w-1/2 flex items-center justify-center mt-12">
            <img
              src="../assets/buy-service-sq@2x.webp"
              class="w-4/5 lg:w-3/5"
            />
          </div>
        </div>
        <img
          src="../assets/circle-hex-group.svg"
          class="absolute top-0 lg:bottom-0 left-0 abs-middle w-26"
        />
      </div>
      <div class="relative mt-12 flex justify-center">
        <div class="w-10/12 lg:w-9/12 z-10">
          <div
            class="lg:max-w-6xl w-full rounded-3xl flex flex-col lg:flex-row bg-primary shadow-2xl"
          >
            <div class="lg:w-3/5 py-12 lg:py-8 px-8">
              <h3 class="text-white font-bold text-white text-xl">
                BuyRealFollows Is Your Free Solution
              </h3>
              <p class="light-text font-light lg:text-xs mt-4 mb-0">
                There are companies out there that can help relieve some of the
                pressure of developing your Instagram presence, like us,
                BuyRealFollows! In fact, we’re seriously helping our clients by
                offering Instagram followers for free! That’s right–free! With
                such a great deal you might be thinking, what’s the catch?
              </p>
            </div>
            <div
              class="lg:w-2/5 pl-8 pb-8 lg:pb-0 lg:pl-0 flex relative lg:items-center lg:justify-center overflow-hidden box-border"
            >
              <a
                href="/"
                class="px-8 py-4 bg-white border border-primary text-primary rounded-full"
                >Read More</a
              >
              <img
                src="../assets/hexxxx.webp"
                class="absolute bottom-0 right-0 h-16 hidden lg:block"
              />
              <img
                src="../assets/semi-circle-top@2x.webp"
                class="absolute top-0 left-0 h-16 hidden lg:block"
              />
            </div>
          </div>
        </div>
        <img
          src="../assets/grid_masked@2x.webp"
          class="hidden lg:block absolute bottom-0 left-0 w-24 grid-bottom-left"
        />
      </div>
      <div class="relative mt-12 flex flex-col justify-center">
        <div class="flex justify-center flex-col relative">
          <h3
            class="text-center text-2xl lg:text-5xl font-medium mt-20 capitalize leading-tight"
          >
            We Offer More Instagram <br />Marketing Services?
          </h3>
          <p class="text-sm font-regular text-center mt-6 mb-4">
            One-time purchase options with no subscription or recurring payment.
          </p>
        </div>
        <div class="w-10/12 lg:w-9/12 z-10">
          <div
            class="lg:max-w-6xl w-full rounded-3xl flex flex-col lg:flex-row bg-white shadow-2xl"
          >
            <div>
              <ul class="m-0 flex">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-dim mt-16 lg:mt-48 py-16">
        <div class="container mx-auto px-8 lg:px-0 lg:max-w-6xl relative">
          <div class="footer py-16 flex flex-col lg:flex-row">
            <div class="lg:w-1/2">
              <p class="font-extrabold text-3xl lg:text-5xl">
                BuyReal<span class="text-primary">Follows.</span>
              </p>
              <p class="m-0 text-sm leading-loose">
                There are companies out there that can help relieve some of the
                pressure of<br class="hidden lg:block" />developing your
                Instagram presence, like us, Mr. Insta! In fact, we’re
                seriously<br class="hidden lg:block" />helping our clients by
                offering Instagram followers for free! That’s right–free!<br
                  class="hidden lg:block"
                />With such a great deal you might be thinking, what’s the
                catch?
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
                <!--                <li class="my-2">-->
                <!--                  <a class="font-light text-sm" href="/privacy">Privacy Policy</a>-->
                <!--                </li>-->
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
        </div>
      </div>
      <div class="p-4 bg-primary text-white">
        <p class="text-center text-sm font-medium text-white">
          Copyright © 2022 BuyRealFollows LLC. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DrawerMenu from '@/components/DrawerMenu'
import LoaderSmall from '@/components/LoaderSmall'
import DropdownHeader from '../components/DropdownHeader'

export default {
  name: 'buy',
  components: {
    DropdownHeader,
    DrawerMenu,
    LoaderSmall,
  },
  async asyncData({ $axios, route }) {
    try {
      const resp = await $axios.get('platform-list/')
      if (resp && !resp.isAxiosError) {
        return {
          platforms: resp.data.results,
        }
      }
    } catch (e) {
      return {
        platforms: [],
      }
    }
  },
  data: () => ({
    showDrawer: false,
    loading: false,
    platforms: [],
  }),
  methods: {
    openFaq() {
      const acc = document.getElementsByClassName('accordion')

      for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
          this.classList.toggle('active')
          var panel = this.nextElementSibling
          var arrow = this.getElementsByTagName('img')[0]
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null

            if (arrow.classList.contains('open')) {
              // Check for class
              arrow.classList.toggle('close')
            } else {
              arrow.classList.toggle('open')
            }
          } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
            if (arrow.classList.contains('open')) {
              // Check for class
              arrow.classList.toggle('close')
            } else {
              arrow.classList.toggle('open')
            }
          }
        })
      }
    },
    closePremiumMenu() {
      this.showDrawer = false
    },
  },
  mounted() {
    this.openFaq()
  },
  computed: {
    faqs() {
      const faqs = []
      const { platform_service, product_city_name, product_name } =
        this.$route.params
      if (product_name && product_name !== '') {
        this.platforms.forEach((platform) => {
          if (platform.slug === platform_service) {
            const service = platform.services.find((service) => {
              return service.slug === product_name
            })
            if (platform.faqs) {
              faqs.push(...platform.faqs)
            } else if (service) {
              faqs.push(...service.faqs)
            }
          }
        })
        return faqs
      } else if (product_city_name && product_city_name !== '') {
        this.platforms.forEach((platform) => {
          if (platform.slug === platform_service) {
            const service = platform.services.find((service) => {
              return service.slug === product_city_name
            })
            if (service) {
              faqs.push(...service.faqs)
            } else if (platform.faqs) {
              faqs.push(...platform.faqs)
            }
          }
        })
        if (faqs.length === 0) {
          this.platforms.forEach((platform) => {
            if (platform.slug === platform_service) {
              const service =
                (platform.services.length > 0 && platform.services[0]) || null
              if (service) {
                faqs.push(...service.faqs)
              } else if (platform.faqs) {
                faqs.push(...platform.faqs)
              }
            }
          })
        }
        return faqs
      } else if (platform_service && platform_service !== '') {
        this.platforms.forEach((platform) => {
          if (platform.slug === platform_service) {
            const service =
              (platform.services.length > 0 && platform.services[0]) || null
            if (platform.faqs) {
              faqs.push(...platform.faqs)
            } else if (service) {
              faqs.push(...service.faqs)
            }
          }
        })
        return faqs
      }
    },
  },
}
</script>

<style scoped>
.dropdown {
  float: left;
  overflow: hidden;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 250px;
  z-index: 10;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.rounded-b-xl {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.h-96 {
  height: 24rem;
}
</style>
