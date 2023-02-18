<template>
  <div>
    <img src="../assets/mask_top_right.svg"
         class="hidden lg:block absolute top-0 right-0 w-26" />
    <div id="page" class="site container mx-auto lg:max-w-6xl bg-white pt-8 mb-4">

      <header id="masthead" class="site-header flex justify-between relative">
        <div class="site-branding">
          <a href="/">
            <img src="../assets/logo_header.svg" alt="Buy real follows logo" class="h-14 mt-4 ml-8 lg:ml-0" />
          </a>
        </div>
        <img id="mob-menu-toggle" src="../assets/menu.svg"
             alt="menu"
             @click="showPremiumMenuMob=true"
             class="block lg:hidden h-4 mt-4 mr-8 lg:ml-0" />
        <nav id="site-navigation" class="hidden lg:flex ">
          <ul id="primary-menu" class="m-0 flex list-none items-center text-sm font-normal nav-menu">
            <dropdown-header :platforms="platforms" />
            <li v-if="!$auth.user" id="menu-item-19"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a
              href="/login">Login</a></li>
            <a v-else id="menu-item-31"
               class="ml-4 font-normal text-primary menu-item menu-item-type-post_type menu-item-object-page menu-item-31 text-primary"
               href="/dashboard">My Dashboard</a>
            <a v-if="!$auth.user" id="menu-item-20"
               class="bg-primary text-white menu-item menu-item-type-post_type menu-item-object-page register-btn"
               href="/register">Register</a>
          </ul>
        </nav>
      </header>
    </div>
    <drawer-menu v-if="showPremiumMenuMob" @close="closePremiumMenu" :platforms="platforms" />
    <nuxt />
    <div class="relative">
      <div class="hidden relative mt-12 lg:mb-32 flex justify-center">

        <div class="w-11/12 lg:w-8/12 z-10">
          <!--<slider :extraClass="true"/>-->
        </div>
        <img src="../assets/grid_masked@2x.webp"
             class="hidden lg:block absolute bottom-0 left-0 w-24 grid-bottom-left-abs" />
      </div>
      <div class="bg-dim py-16">
        <div class="container mx-auto px-8 lg:px-0 lg:max-w-6xl relative">

          <div class="footer py-16 flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2">
              <p class="font-extrabold text-3xl lg:text-5xl mb-4">BuyReal<span class="text-primary">Follows.</span>
              </p>
              <p class="m-0 text-sm leading-loose">There are companies out there that can help relieve some of
                the pressure of<br class="hidden lg:block" />developing your Instagram presence, like us,
                Buyrealfollows!
                In fact, we’re
                seriously<br class="hidden lg:block" />helping our clients by offering Instagram followers for free!
                That’s
                right–free!<br class="hidden lg:block" />With such a great deal you might be thinking, what’s the
                catch? </p>
            </div>
            <div class="lg:w-1/2 flex lg:justify-between mt-16">
              <ul class="list-none m-0 mr-16 lg:mr-0">
                <li>
                  <h3 class="font-medium mb-4">Services</h3>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/instagram-services">Instagram</a>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/youtube-services">Youtube</a>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/spotify-services">Spotify</a>
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
                  <a class="folnt-light text-sm" href="/register">Signup</a>
                </li>
                <!--                  <li class="my-2">-->
                <!--                    <a class="font-light text-sm" href="">Affiliates</a>-->
                <!--                  </li>-->
                <!--                  <li class="my-2">-->
                <!--                    <a class="font-light text-sm" target="_blank" href="mailto:support@buyrealfollows.com">Support Email</a>-->
                <!--                  </li>-->
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
                  <a class="font-light text-sm" href="/terms">Terms and conditions</a>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/blog">Blog</a>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="//sitemap">Sitemap</a>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/robots.txt">Robots.txt</a>
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
                <a class="font-light text-sm" href="/terms">Terms and conditions</a>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/blog">Blog</a>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="//sitemap">Sitemap</a>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/robots.txt">Robots.txt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="p-4 bg-primary text-white">
        <p class="text-center text-sm font-medium text-white">Copyright © 2022 BuyRealFollows LLC. All Rights
          Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import PremiumMenu from '../components/PremiumMenu'
import DrawerMenu from '../components/DrawerMenu'
import DropdownHeader from '../components/DropdownHeader'

export default {
  name: 'navheader',
  components: {
    PremiumMenu,
    DrawerMenu,
    DropdownHeader
  },

  data: () => ({
    showPremiumMenu: false,
    showPremiumMenuMob: false,
    drawerMenu: false,
    platforms: [],
    faqs: []
  }),
  async fetch() {
    try {
      const resp = await this.$axios.get('platform-list/', {}, { timeout: 1000 })
      if (resp && !resp.isAxiosError) {
        this.platforms = resp.data && resp.data.results
        this.faqs = resp.data && resp.data.results[0].services[0].faqs
      }
      this.loading = false
    } catch (e) {
      this.error = e.response.data.message
      this.loading = false
    }
  },
  methods: {
    closePremiumMenu() {
      this.showPremiumMenu = false
      this.drawerMenu = false
    }
  }
}
</script>

<style>

ul#primary-menu li {
  margin-left: 16px;
  margin-right: 16px;
  color: #40455F;
}

.menu-item-31 {
  padding: 10px;
  padding-left: 36px;
  padding-right: 36px;
  background-color: #ffffff;
  border-radius: 24px;
  color: #5347E3 !important;
  border: 1px solid #5347E3;
}

.register-btn {
  padding: 10px;
  padding-left: 36px;
  padding-right: 36px;
  background-color: #5347E3;
  border-radius: 24px;
  color: #ffffff;
  border: 1px solid #5347E3;
}

ul, ol {
  margin: 0 0 1.5em 3em;
}

.light-text {
  color: rgba(255, 255, 255, 0.7);
}

</style>
