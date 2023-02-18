<template>
  <nav id="site-navigation-mob" class="fixed z-20 top-0 left-0 w-full h-screen bg-dim-trans">
    <ul class="relative p-0 w-11/12 bg-white h-screen" v-click-outside="close">
      <ul id="primary-menu-mob"
          class="flex flex-col list-none text-sm font-normal nav-menu bg-white h-screen pt-8 pb-16 overflow-y-scroll">
        <li id="menu-item-21"
            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-21 mb-6">
          <a href="/" aria-current="page">Home</a>
        </li>
        <li id="menu-item-38"
            @click="toggleSubMenu"
            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35 cursor-pointer mb-6">
          Premium
          <svg-icon class="inline h-2 w-2 ml-1"
                    name="right_arrow" />
        </li>
        <div v-if="showSubmenu" id="mob-menu" class="w-full flex flex-col justify-center">
          <div v-for="(menuItem,idx) in menu" :key="idx">
            <div class="mb-6">
              <span class="font-medium text-primary bg-light-1  text-sm bg-light-1 px-4 py-3 rounded-lg">Instagram Services</span>
            </div>
            <ul class="list-none m-0 p-0">
              <li>
                <a class="text-xs font-light" href="">Buy Hashtags Research & Profile Optimization</a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy Instagram Followers
                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy Automatic Followers For Instagram
                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy Instagram Likes</a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy Automatic Likes For Instagram
                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy Instagram Views

                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy Instagram Comments
                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy Instagram Package Deal
                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Free Instagram Followers
                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy IGTV Likes
                </a>
              </li>
              <li>
                <a class="text-xs font-light" href="">Buy IGTV Views
                </a>
              </li>
            </ul>
          </div>
        </div>
<!--        <li id="menu-item-33" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-33 mb-6"><a-->
<!--          href="#faq">FAQ</a></li>-->
        <li id="menu-item-17" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17 mb-6"><a
          href="/contact">Contact Us</a></li>
      </ul>
      <div
        class="absolute w-full bottom-0 right-0 flex justify-between items-center p-4 px-8 border border-light_thin bg-white">
        <p id="menu-item-19" class="m-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a
          href="/login">Login</a></p>
        <a id="menu-item-31" class="m-0 menu-item menu-item-type-post_type menu-item-object-page register-btn"
           href="/register">Register</a>
      </div>
    </ul>
  </nav>
</template>

<script>
import SliderLarge from '../components/SliderLarge'

export default {
  components: {
    SliderLarge
  },
  data: () => ({
    showSubmenu: false
  }),
  props:['menu'],
  name: 'premium-menu',
  methods: {
    close() {
      this.$emit('close')
    },
    toggleSubMenu() {
      this.showSubmenu = !this.showSubmenu
    }
  }
}
</script>

<style>

#premMenu:after {
  content: '';
  position: absolute;
  background: url(../assets/sprite/svg/arrow_rounded.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 100px;
  top: 0;
  left: 50%;
  transform: translate(140%, 50%);
  z-index: 9;
}

</style>
