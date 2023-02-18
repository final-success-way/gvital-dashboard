<template>
  <div>
    <div v-if="!showDetail" class="bg-primary pt-16 relative">
      <div class="w-5/6 lg:w-4/6 mx-auto relative pb-8">
        <div class="flex justify-around items-center flex-col lg:flex-row">
          <div class="flex-1 text-center">
            <h2 class="text-2xl lg:text-3xl font-bold text-white">
              Hello,
              {{
                $auth.user && $auth.user[0] && $auth.user[0].name !== ''
                  ? $auth.user[0].name
                  : $auth.user[0].email.split('@') &&
                    $auth.user[0].email.split('@')[0]
              }}!
            </h2>
            <h3 class="text-2xl lg:text-3xl font-bold text-white my-4">
              Account Dashboard
            </h3>
            <p class="light-text font-book">
              From your account dashboard you can view your recent orders,
              manage your<br />shipping and billing addresses, and edit your
              password and account details.
            </p>
            <br />
          </div>
        </div>
      </div>
      <img
        src="../assets/semi-circle.svg"
        class="hidden lg:block absolute left-0 top-0 w-16"
      />
      <img
        src="../assets/half_hex_rounded.svg"
        class="hidden lg:block absolute right-0 bottom-0 w-12"
      />
    </div>
    <div class="container lg:max-w-6xl mx-auto flex py-2">
      <div class="hidden lg:block w-1/4 p-4 lg:p-1">
        <div class="border border-light_thin rounded-lg">
          <ul class="list-none flex flex-col py-4 m-0">
            <li class="mb-4 px-6">
              <nuxt-link
                class="text-sm flex items-center justify-between hover:text-primary"
                to="/dashboard"
                >Manage Orders
                <svg-icon
                  name="right_arrow"
                  class="transform h-2 w-2 -rotate-90"
                />
              </nuxt-link>
            </li>
            <li class="mb-4 px-6">
              <nuxt-link
                class="text-sm flex items-center justify-between hover:text-primary"
                to="/dashboard/account"
              >
                Account Details
                <svg-icon
                  name="right_arrow"
                  class="transform h-2 w-2 -rotate-90"
                />
              </nuxt-link>
            </li>
            <li class="mb-4 px-6">
              <h3
                class="text-sm flex items-center justify-between cursor-pointer hover:text-primary"
                @click="openLogoutModal"
              >
                Logout
                <svg-icon
                  name="right_arrow"
                  class="transform h-2 w-2 -rotate-90"
                />
              </h3>
            </li>
            <li class="mb-4 px-6 border-t-thin pt-6">
              <nuxt-link
                class="text-sm flex items-center justify-between hover:text-primary"
                to="/dashboard/support"
              >
                Help and Support
              </nuxt-link>
            </li>
            <!--            <li class="mb-2 px-6">-->
            <!--              <nuxt-link class="text-sm flex items-center justify-between hover:text-primary" to="/privacy">Privacy-->
            <!--                Policy-->
            <!--              </nuxt-link>-->
            <!--            </li>-->
          </ul>
        </div>
      </div>
      <div v-if="!showDetail" class="w-full block lg:hidden p-2 lg:p-1">
        <div class="border border-light_thin rounded-lg">
          <ul class="list-none flex flex-col py-4 m-0">
            <li class="mb-4 px-6" @click="openDetail('Orders')">
              <nuxt-link
                class="text-sm flex items-center justify-between hover:text-primary"
                to="/dashboard"
                >Manage Orders
                <svg-icon
                  name="right_arrow"
                  class="transform h-2 w-2 -rotate-90"
                />
              </nuxt-link>
            </li>
            <li class="mb-4 px-6" @click="openDetail('Account Details')">
              <nuxt-link
                class="text-sm flex items-center justify-between hover:text-primary"
                to="/dashboard/account"
              >
                Account Details
                <svg-icon
                  name="right_arrow"
                  class="transform h-2 w-2 -rotate-90"
                />
              </nuxt-link>
            </li>
            <li class="mb-4 px-6">
              <h3
                class="text-sm flex items-center justify-between cursor-pointer hover:text-primary"
                @click="openLogoutModal"
              >
                Logout
                <svg-icon
                  name="right_arrow"
                  class="transform h-2 w-2 -rotate-90"
                />
              </h3>
            </li>
            <li
              class="mb-4 px-6 border-t-thin pt-6"
              @click="openDetail('Help and Support')"
            >
              <nuxt-link
                class="text-sm flex items-center justify-between hover:text-primary"
                to="/dashboard/support"
              >
                Help and Support
              </nuxt-link>
            </li>
            <!--            <li class="mb-2 px-6">-->
            <!--              <nuxt-link class="text-sm flex items-center justify-between hover:text-primary" to="/privacy">Privacy-->
            <!--                Policy-->
            <!--              </nuxt-link>-->
            <!--            </li>-->
          </ul>
        </div>
      </div>
      <div v-else class="block lg:hidden w-full lg:w-3/4 p-4">
        <a href="/dashboard" class="text-xs flex items-center mb-6">
          <svg-icon
            name="right_arrow"
            class="h-3 w-3 mr-2 mb-0 transform rotate-90"
          />
          <span>Goto Main Menu</span></a
        >
        <p class="text-lg text-primary my-4">{{ currentMenu }}</p>
        <div class="bg-dim border border-light_thin rounded-lg">
          <nuxt-child :keep-alive="true" />
        </div>
      </div>
      <div class="hidden lg:block w-3/4 p-1">
        <div class="bg-dim border border-light_thin rounded-lg">
          <nuxt-child :keep-alive="true" />
        </div>
      </div>
    </div>
    <ModalLogout v-if="showLogout" @close="closeDialog" />
  </div>
</template>

<script>
import ModalLogout from '../components/ModalLogout'

export default {
  name: 'index',
  layout: 'navheaderauth',
  middleware: ['auth'],
  data: () => ({
    showLogout: false,
    showDetail: false,
    currentMenu: 'Orders',
    user: {},
  }),
  components: { ModalLogout },
  methods: {
    openLogoutModal() {
      this.showLogout = true
    },
    closeDialog() {
      this.showLogout = false
    },
    openDetail(menu) {
      this.showDetail = true
      this.currentMenu = menu
    },
  },
  mounted() {
    if (
      this.$route &&
      (this.$route.name === 'dashboard-account' ||
        this.$route.name === 'dashboard-support') &&
      window.innerWidth < 800
    ) {
      this.showDetail = true
      this.currentMenu =
        this.$route.name === 'dashboard-account'
          ? 'Account Details'
          : 'Help and Support'
    }
  },
}
</script>

<style scoped>
.light-text {
  color: rgba(255, 255, 255, 0.7);
}
</style>
