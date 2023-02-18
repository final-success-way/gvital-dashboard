<template>
  <div v-if="!loading">
    <div
      v-if="paymentStatus === true"
      class="container mx-auto mt-16 mb-40 w-4/5 lg:w-2/3 flex flex-col lg:flex-row justify-center"
    >
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div class="h-16 w-16 mb-4">
          <svg-icon name="tick_checked" class="h-16 w-16" />
        </div>
        <h3 class="font-bold text-3xl text-center">{{ order_status }}</h3>
        <p class="m-0 text-xs text-center my-2">{{ order_message }}</p>
        <div class="border-t-dim h-1 w-full my-6"></div>
        <div class="">
          <h3 class="font-medium text-sm mb-2 text-center">
            {{ extra_message }}
          </h3>
          <p class="m-0 text-xs text-center mb-4 invisible" v-if="new_account">
            Your login credentials will be sent to you on your email. Didn't
            receive ?
            <span class="text-primary underline" @click="resendPassword"
              >Resend Now</span
            >
          </p>
          <button
            type="submit"
            v-if="!$auth.user"
            class="w-full bg-primary text-xs py-3 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
            @click="$emit('close')"
          >
            <a v-if="!loading" href="/login">Login Now</a>
            <LoaderSmall v-else />
          </button>
        </div>
      </div>
      <div
        class="px-4 mx-2 mt-4 lg:mt-0 w-full lg:w-1/2 pb-12 border-0 border-l-0 lg:border-l flex flex-col"
      >
        <div class="flex justify-between">
          <span class="text-xl font-medium">Order ID</span>
          <span class="font-medium text-primary">#{{ order_id }}</span>
        </div>
        <div class="flex justify-between my-4">
          <span class="text-xl capitalize"
            >{{ product_quantity }}
            {{ product_platform && product_platform.toLowerCase() }}
            {{ product_name }}</span
          >
          <span class="font-medium text-primary">${{ product_pricing }}</span>
        </div>
        <div class="flex justify-between mt-4 mb-2 pl-4">
          <span class="text-xs">- Percent discount</span>
          <span class="">{{ product_discount }}%</span>
        </div>
        <div class="flex justify-between pb-2 pl-4 border-b">
          <span class="text-xs">- Payment method</span>
          <span class="">{{ payment_method }}</span>
        </div>
        <div class="flex justify-between pb-2 my-2">
          <span class="text-xl">Total</span>
          <span class="">${{ order_amount }}</span>
        </div>
      </div>
    </div>
    <div
      v-else-if="paymentStatus === false"
      class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
    >
      <h3 class="font-bold text-3xl text-center">Payment Failure</h3>
      <p class="m-0 text-xs text-center my-2">
        Payment did not go though for your order
      </p>
      <div class="border-t-dim h-1 w-full my-6"></div>
      <div class="pt-8">
        <h3 class="font-medium text-sm mb-2 text-center"></h3>
        <p class="m-0 text-xs text-center mb-4">
          Think this is an error ?
          <a
            class="text-primary underline"
            :href="`/contact?payment_session_id=${$route.query.payment_session_id}`"
            >Contact support</a
          >
        </p>
      </div>
    </div>
  </div>
  <div
    v-else
    class="container h-screen mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
  >
    <loader-small />
  </div>
</template>

<script>
import LoaderSmall from '@/components/LoaderSmall'

export default {
  name: 'order',
  components: { LoaderSmall },
  layout: 'navheader',
  data: () => ({
    paymentStatus: false,
    new_account: false,
    extra_message: null,
    order_status: '',
    loading: true,
  }),
  methods: {
    async getPaymentStatus() {
      const { params, query } = this.$route
      const { success, payment_session_id } = query
      this.loading = true
      try {
        const resp = await this.$axios.get('verify-payment/', {
          params: { payment_ref: payment_session_id },
        })
        if (resp && !resp.isAxiosError) {
          this.paymentStatus = true
          this.email = resp && resp.data && resp.data.email
          this.new_account = resp && resp.data && resp.data.new_account
          this.product_name = resp && resp.data && resp.data.product_name
          this.product_quantity =
            resp && resp.data && resp.data.product_quantity
          this.product_pricing = resp && resp.data && resp.data.product_pricing
          this.product_discount =
            resp && resp.data && resp.data.product_discount
          this.order_amount = resp && resp.data && resp.data.order_amount
          this.order_id = resp && resp.data && resp.data.order_id
          this.payment_method = resp && resp.data && resp.data.payment_method
          this.product_platform =
            resp && resp.data && resp.data.product_platform
          this.order_message =
            resp && resp.data && resp.data.pending
              ? `You will start receiving ${resp.data.product_name} once we verify the payment`
              : `You will start receiving ${resp.data.product_name} shortly`
          this.order_status =
            resp && resp.data && resp.data.pending
              ? 'We are still processing your payment'
              : 'Your order was processed successfully'
          this.extra_message = ''
        } else {
          this.paymentStatus = false
        }
        this.loading = false
      } catch (e) {
        this.paymentStatus = false
        this.loading = false
      }
    },
  },
  mounted() {
    this.getPaymentStatus()
  },
}
</script>

<style scoped></style>
