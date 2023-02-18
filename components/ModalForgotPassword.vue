<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper align-bottom lg:align-middle">
          <form v-if="!emailSent" @submit.prevent="resetPassword"
                class="modal-container w-full lg:w-2/5 rounded-2xl relative px-10 py-12">
            <svg-icon name="close" @click="$emit('close')"
                      class="absolute h-5 w-5 cursor-pointer rounded-full hover:bg-light top-0 right-0 m-6" />
            <div class="modal-header flex justify-center font-medium text-lg">
              Forgot Password
            </div>
            <transition name="fade">
              <p v-if="errorMessage"
                 class="text-xs bg-youtube_bg p-4 rounded-lg font-medium text-youtube text-center my-4">
                {{ errorMessage }}.</p>
            </transition>
            <div class="modal-body my-12">
              <div class="w-full">
                <label class="font-medium text-xs">Enter Email <span class="ml-1 text-star">*</span></label>
                <div class="my-2 w-full flex items-center">
                  <input type="email"
                         v-model="email"
                         required
                         autocomplete="on"
                         class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
                         placeholder="Enter email" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
              >
                <span v-if="!loading">Reset Password</span>
                <LoaderSmall v-else />
              </button>
            </div>
          </form>
          <div v-else class="modal-container w-full lg:w-2/5 rounded-2xl relative px-10 py-12">
            <svg-icon name="close" @click="$emit('close')"
                      class="absolute h-5 w-5 cursor-pointer rounded-full hover:bg-light top-0 right-0 m-6" />
            <div class="modal-header flex justify-center font-medium text-lg">
              Verification Link Sent
            </div>
            <div class="modal-body my-12">
              <div class="w-full">
                <p class="font-normal text-sm text-center">You will receive a verification link on<br />{{ email }} if
                  your account exists with us</p>
              </div>
            </div>
            <div class="modal-footer flex justify-center">
              <a
                class="w-full bg-white border-light text-sm p-4 text-center rounded-full text-primary hover:bg-light focus:outline-none"
                href="https://mail.google.com">
                Check your email
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import LoaderSmall from '../components/LoaderSmall'

export default {
  name: 'modalforgotpassword',
  components: { LoaderSmall },
  data: () => ({
    emailSent: false,
    email: '',
    loading: false,
    errorMessage: null
  }),
  methods: {
    async resetPassword() {
      this.loading = true
      try {
        const resp = await this.$axios.post('reset-password/', {
          email: this.email
        })
        if (resp && !resp.isAxiosError) {
          this.showSuccess = true
          this.error = false
          this.message = resp.data && resp.data.message
          this.loading = false
          this.emailSent = true
        }
      } catch (err) {
        this.error = true
        if (err.response && err.response.data) {
          const { data } = err.response
          this.message = data
          this.errorMessage = data && data.message
        }
        this.loading = false
        this.emailSent = false
      }
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
}

.modal-container {
  margin: 0px auto;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

@media (max-width: 800px) {
  .modal-container {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
