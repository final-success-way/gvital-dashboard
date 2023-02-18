<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper align-bottom lg:align-middle">
        <div class="modal-container w-full lg:w-2/5 rounded-2xl relative px-10 py-12">
          <svg-icon name="close" @click="$emit('close')"
                    class="absolute h-5 w-5 cursor-pointer rounded-full hover:bg-light top-0 right-0 m-6" />
          <div class="modal-header flex justify-center font-medium text-lg">
            <slot name="header">
              Pay using
            </slot>
          </div>

          <div class="modal-body my-6">
            <slot name="body">
              <div class="w-full">
                <h3 class="font-normal text-center text-sm">Proceed to payment</h3>
              </div>
            </slot>
          </div>
          <form ref="stripeForm" :action="active_stripe" method="post">
            <input type="hidden" name="order_id" :value="order" />
            <input type="hidden" name="product" :value="product" />
            <input type="hidden" name="redirect_url" :value="`https://www.buyrealfollows.com/order`" />
            <input type="hidden" name="amount" :value="amount" />
            <input type="hidden" name="email" :value="email" />
          </form>

          <div class="modal-footer flex items-center flex-col">
            <slot name="footer">
              <button
                class="mt-6 h-12 w-full ml-2 flex justify-center items-center border-none bg-stripe text-sm h-8 py-2 rounded-full text-white hover:bg-light hover:border-primary focus:outline-none"
                @click="setUpStripe">
                Credit, Debit card payment using
                <svg-icon name="stripe" class="w-20 h-4" />
                <p v-if="discount && discount.stripe">Additional {{ discount.stripe.percent }}% on using Stripe</p>
              </button>
<!--              <button-->
<!--                v-if="crypto"-->
<!--                class="mt-6 h-12 w-full flex justify-center items-center ml-2 border-none bg-coinbase text-sm h-8 py-2 rounded-full text-white hover:bg-light hover:border-primary focus:outline-none"-->
<!--                @click="setUpCoinbase">-->
<!--                Cryptocurrency payment using-->
<!--                <svg-icon name="coinbase" class="w-24 h-4" />-->
<!--                <p v-if="discount && discount.coinbase">Additional {{ discount.coinbase.percent }}% on using-->
<!--                  Coinbase</p>-->
<!--              </button>-->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalPayment',
  data: () => ({
    emailSent: false,
    loading: null,
    discount: null,
    orderID: null,
    amount: null
  }),
  props: ['order', 'stripe_key', 'redirect_url', 'email', 'crypto', 'product','active_stripe'],
  methods: {
    setUpPaypal() {
      const { stripe_key, order, email } = this.$props
      this.$axios.post('create-payment/', {
        order_id: order,
        method: 'PAYPAL',
        email: email
      }).then((resp) => {
        if (resp && resp.data && resp.data.link !== '') {
          window.open(resp.data.link)
        }
      })
    },
    setUpStripe() {
      this.loading = 'STRIPE'

      const { stripe_key, order, email } = this.$props
      //const stripe = window.Stripe(stripe_key)
      this.$axios.post('create-payment/', {
        order_id: order,
        method: 'STRIPE_NEW',
        email: email
      }).then((resp) => {
        this.loading = null
        if (resp && resp.data && resp.data.amount !== '') {
          this.amount = resp.data.amount
          setTimeout(()=> {
            this.$refs.stripeForm.submit()
          },500);
        }
      }).catch((e) => {
      })
    },
    setUpCoinbase() {
      this.loading = 'COINBASE'
      const { stripe_key, order, email } = this.$props
      this.$axios.post('create-payment/', {
        order_id: order,
        method: 'COINBASE',
        email: email
      }).then((resp) => {
        this.loading = null
        if (resp && resp.data && resp.data.checkoutId !== '') {
          window.open(`https://commerce.coinbase.com/checkout/${resp.data.checkoutId}`, '_parent')
        }
      })

    },
    setUpUnitpay() {
      this.loading = 'UNITPAY'
      const { stripe_key, order, email } = this.$props
      const stripe = Stripe(stripe_key)
      this.$axios.post('create-payment/', {
        order_id: order,
        method: 'UNITPAY',
        email: email
      }).then((resp) => {
        this.loading = null
        if (resp && resp.data && resp.data.link !== '') {
          window.open(resp.data.link, '_parent')
        }
      })

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
