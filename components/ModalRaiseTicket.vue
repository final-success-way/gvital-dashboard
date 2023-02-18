<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper align-bottom lg:align-middle">
          <form @submit.prevent="raiseIssue"
                class="modal-container w-full lg:w-2/5 rounded-2xl relative px-10 py-12">
            <svg-icon name="close" @click="$emit('close')"
                      class="absolute h-5 w-5 cursor-pointer rounded-full hover:bg-light top-0 right-0 m-6" />
            <div class="modal-header flex justify-center font-medium text-lg">
              Raise new ticket
            </div>
            <div class="modal-body">
              <div class="w-full">
                <label class="text-xs">Subject <span class="ml-1 text-star">*</span></label>
                <div class="my-2 w-full flex items-center">
                  <label class="container text-sm" :class="subject=='ORDER'?'bg-primary text-white':'bg-light'">Order
                    <input type="radio" checked="checked" value="ORDER" name="subject" v-model="subject">
                    <span class="hidden lg:block check_rounded h-5 w-5"></span>
                  </label>
                  <label class="container text-sm" :class="subject=='PAYMENT'?'bg-primary text-white':'bg-light'">Payment
                    <input type="radio" name="subject" value="PAYMENT" v-model="subject">
                    <span class="hidden lg:block check_rounded h-5 w-5" />
                  </label>
                  <label class="container text-sm" :class="subject=='SERVICE'?'bg-primary text-white':'bg-light'">Service
                    <input type="radio" name="subject" value="SERVICE" v-model="subject">
                    <span class="hidden lg:block check_rounded h-5 w-5" />
                  </label>
                  <label class="container text-sm" :class="subject=='OTHER'?'bg-primary text-white':'bg-light'">Other
                    <input type="radio" name="subject" value="OTHER" v-model="subject">
                    <span class="hidden lg:block check_rounded h-5 w-5" />
                  </label>
                </div>
              </div>
              <div class="w-full">
                <label class="text-xs">Order Id <span class="ml-1 text-star">*</span></label>
                <div class="my-2 w-full flex items-center">
                  <input type="text"
                         v-model="orders"
                         required
                         autocomplete="on"
                         class="w-full text-sm border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
                         placeholder="For multiple orders, separate them using comma. (Eg : 12345, 12345, 12345)" />
                </div>
              </div>
            </div>
            <div class="modal-body">
              <div class="w-full">
                <label class="text-xs">Message <span class="ml-1 text-star">*</span></label>
                <div class="my-2 w-full flex items-center">
                  <textarea type="text"
                            required
                            autocomplete="on"
                            v-model="message"
                            class="w-full h-32 border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
                            placeholder="Enter your message here"></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer mt-4">
              <button
                type="submit"
                class="w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
              >
                <span v-if="!loading">Save Changes</span>
                <LoaderSmall v-else />
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import LoaderSmall from '../components/LoaderSmall'

export default {
  name: 'modalraiseticket',
  components: { LoaderSmall },
  data: () => ({
    subject: 'ORDER',
    email: '',
    orders: '',
    loading: false,
    errorMessage: null,
    message: null
  }),
  methods: {
    async raiseIssue() {
      this.loading = true
      try {
        const resp = await this.$axios.post('raise-issue/', {
          subject: this.subject,
          message: this.message,
        })
        if (resp && !resp.isAxiosError) {
          this.showSuccess = true
          this.error = false
          this.message = resp.data && resp.data.message
          this.loading = false;
          this.$emit('close')
        }
      } catch (err) {
        this.error = true
        if (err.response && err.response.data) {
          const { data } = err.response
          this.message = data
          this.errorMessage = data && data.message
        }
        this.loading = false
      }
    }
  },
  mounted() {
    this.subject = 'ORDER'
    this.email = ''
    this.orders = ''
    this.loading = false
    this.errorMessage = null
    this.message = null
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

.container {
  display: block;
  position: relative;
  margin-right: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bg-light {
  background: #E2E0FF;
}

.container [type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.check_rounded {
  position: absolute;
  top: 0;
  right: 0;
  height: 25px;
  width: 25px;
  transform: translate(-25%, 25%);
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover [type="radio"] ~ .check_rounded {

}

[type="radio"]:checked + label {
  background: #000;
  border-color: green;
  color: white;
}

/* When the radio button is checked, add a blue background */
.container [type="radio"]:checked ~ .check_rounded {
  background: url('../assets/sprite/svg/check_rounded.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

/* When the radio button is checked, add a blue background */
.container [type="radio"]:checked {
  background: #3A31A8;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.check_rounded:after {
  content: "";
  position: absolute;
  display: none;
}

</style>
