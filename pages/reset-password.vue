<template>
  <form
    v-if="tokenValid"
    @submit.prevent="changePassword"
    class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/3"
  >
    <h3 class="font-bold text-3xl mb-4">Set Password</h3>
    <transition name="fade">
      <p
        v-if="errorMessage"
        class="text-xs bg-youtube_bg p-4 rounded-lg font-medium text-youtube text-center my-4"
      >
        {{ errorMessage }}.
      </p>
    </transition>

    <div class="w-full">
      <label class="font-medium text-xs"
        >Password <span class="ml-1 text-star">*</span></label
      >
      <div class="my-2 w-full flex items-center">
        <input
          type="password"
          v-model="user.password"
          required
          @input="clearWarning"
          :class="error === 'password' ? 'bg-youtube_bg' : ''"
          class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
          placeholder="Enter your password here"
        />
      </div>
    </div>
    <div class="w-full">
      <label class="font-medium text-xs"
        >Confirm Password <span class="ml-1 text-star">*</span></label
      >
      <div class="my-2 w-full flex items-center">
        <input
          type="password"
          v-model="user.confirm_password"
          required
          @input="clearWarning"
          :class="error === 'password' ? 'bg-youtube_bg' : ''"
          class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
          placeholder="Confirm the above password"
        />
      </div>
    </div>

    <button
      type="submit"
      class="w-full bg-primary text-sm my-4 p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
    >
      <span v-if="!loading">Reset</span>
      <loader-small v-else />
    </button>
  </form>
  <div
    v-else-if="password_reset === true"
    class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
  >
    <div class="h-16 w-16 mb-4">
      <svg-icon name="check" class="h-16 w-16" />
    </div>
    <h3 class="font-bold text-3xl text-center">
      Password has successfully been reset
    </h3>
    <div class="border-t-dim h-1 w-full py-6 my-6 text-center">
      You can now go ahead and login into dashboard
    </div>
    <div class="pt-8">
      <button
        class="w-full bg-primary text-xs py-3 px-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
      >
        <a href="/login">Move to Login</a>
      </button>
    </div>
  </div>
  <div
    v-else-if="password_reset === false"
    class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
  >
    <div class="h-16 w-16 mb-4">
      <svg-icon name="error" class="h-16 w-16" />
    </div>
    <h3 class="font-bold text-3xl text-center">Password reset failed</h3>
    <p
      v-if="errorMessage"
      class="text-xs bg-youtube_bg p-4 rounded-lg font-medium text-youtube text-center my-4"
    >
      {{ errorMessage }}.
    </p>
    <div class="pt-8">
      <button
        @click="tryAgain"
        class="w-full bg-primary text-xs py-3 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
      >
        Try Again
      </button>
    </div>
  </div>
  <div
    v-else-if="tokenValid === false"
    class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
  >
    <div class="h-16 w-16 mb-4">
      <svg-icon name="error" class="h-16 w-16" />
    </div>
    <h3 class="font-bold text-3xl text-center">
      Link is either invalid or expired
    </h3>
    <div class="border-t-dim h-1 w-full my-6"></div>
    <div class="pt-8">
      <button
        class="w-full bg-primary text-xs py-3 px-12 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
      >
        <a href="/login">Go to Login</a>
      </button>
    </div>
  </div>
  <div
    v-else
    class="container mx-auto mt-16 mb-64 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
  ></div>
</template>

<script>
import ModalForgotPassword from '../components/ModalForgotPassword'
import LoaderSmall from '../components/LoaderSmall'

export default {
  name: 'reset-password',
  layout: 'navheader',
  data: () => ({
    showForgot: false,
    password_reset: null,
    loading: false,
    errorMessage: null,
    error: null,
    tokenValid: null,
    user: {},
  }),
  components: { ModalForgotPassword, LoaderSmall },
  created() {},
  async asyncData({ $axios, route }) {
    const { query } = route
    try {
      const resp = await $axios.post('password-reset/', {
        token: query && query['token'],
      })
      if (resp && !resp.isAxiosError)
        return {
          tokenValid: resp.data && resp.data.success,
        }
    } catch (e) {
      const { data } = e.response
      return {
        tokenValid: false,
      }
    }
  },
  methods: {
    openForgotDialog() {
      this.showForgot = true
    },
    tryAgain() {
      this.password_reset = null
      this.tokenValid = true
    },
    closeDialog() {
      this.showForgot = false
    },
    async changePassword(e) {
      e.preventDefault()
      const { query } = this.$route
      this.loading = true
      try {
        const resp = await this.$axios.post('change-user-password/', {
          token: query && query['token'],
          new_password: this.user.password,
          confirm_password: this.user.confirm_password,
        })

        if (resp && !resp.isAxiosError) {
          this.password_reset = true
          this.tokenValid = null
        } else {
          this.password_reset = false
          this.tokenValid = null
        }
        this.loading = false
      } catch (err) {
        this.loading = false
        this.password_reset = false
        this.tokenValid = null
        const { data } = err.response
        this.errorMessage = data && data.server_response
      }
    },
    clearWarning() {
      this.errorMessage = null
    },
  },
}
</script>

<style scoped></style>
