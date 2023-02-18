<template>
  <nav id="site-navigation-mob" class="fixed z-20 top-0 left-0 w-full h-screen bg-dim-trans">
    <ul class="relative p-0 w-11/12 bg-white h-screen" v-click-outside="close">
      <ul id="primary-menu-mob"
          class="flex flex-col list-none text-sm font-normal nav-menu bg-white h-screen pt-8 pb-32 overflow-y-scroll">
        <li
          class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-21 mb-6">
          <a href="/" aria-current="page">Home</a>
        </li>
        <li
          class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-21 mb-6">
          <a href="/blog" aria-current="page">Blog</a>
        </li>
        <li
          class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-21 mb-6">
          <a href="/faq" aria-current="page">FAQ</a>
        </li>
        <div v-for="(platform,idx) in platforms" :key="idx">
          <li
              @click="toggleSubMenu(idx)"
              class="rounded capitalize px-4 py-2 outline-none border-none menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35 text-white cursor-pointer mb-6"
              :class="platform.name.toLowerCase()">
            <a class="text-white"  :href="'/'+platform.slug">{{ platform.name.toLowerCase() }}</a>
          </li>
          <div id="mob-menu" class="w-full flex flex-col justify-center mb-4"
               v-for="(service, idxx) in platform.services">
            <div class="">
              <a :href="`/${platform.slug}/${service.slug}`" class="text-sm capitalize">Buy {{ platform.name.toLowerCase() }} {{ service.name }}</a>
            </div>
          </div>
        </div>
      </ul>
      <div
        v-if="$auth.user"
        class="absolute w-full bottom-0 right-0 flex justify-between items-center p-4 px-8 border border-light_thin bg-white">
        <p
           class="invisible m-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-19 bg-light-1 h-10 w-10 rounded-full flex justify-center items-center">
          <a
            href="/">
            <svg-icon name="cart_icon" class="h-5 w-5" />
          </a></p>
        <p class="m-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><a
          href="/dashboard">My Dashboard</a></p>
      </div>
      <div
        v-else
        class="absolute w-full bottom-0 right-0 flex justify-between items-center p-4 px-8 border border-light_thin bg-white">
        <p id="menu-item-19" class="m-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a
          href="/login">Login</a></p>
        <a class="m-0 menu-item menu-item-type-post_type menu-item-object-page register-btn"
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
    showSubmenu: -1
  }),
  props: ['platforms'],
  name: 'drawer-menu',
  methods: {
    close() {
      this.$emit('close')
    },
    toggleSubMenu(idx) {
      if (this.showSubmenu === idx) {
        this.showSubmenu = -1
      } else {
        this.showSubmenu = idx
      }
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


.linkedin {
  background-color: #0a66c2;
}
.spotify {
  background-color: #1ed760;
}
.youtube {
  background-color: #ff0000;
}
.facebook {
  background-color: #4267b2;
}
.tiktok {
  background-color: #000000;
}
.instagram {
  background-color: #833ab4;
}
.twitter {
  background-color: #1da1f2;
}
.soundcloud {
  background-color: #0a66c2;
}

</style>
