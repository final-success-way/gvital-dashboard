<template>
  <div>
    <table
      v-if="orders && orders.length > 0"
      class="hidden lg:block table-fixed m-0 overflow-hidden box-border border-box"
    >
      <thead>
        <tr>
          <th class="w-1/12 px-4 py-3 font-medium text-xs border-r border-b">
            #
          </th>
          <th
            class="w-full lg:w-1/2 px-4 font-medium text-xs lg:border-r border-b"
          >
            <span class="float-left">Order</span>
            <span class="float-right"
              ><svg-icon
                name="search"
                class="h-4 w-4 inline vertical-middle" /><input
                type="text"
                class="font-normal pl-2 text-xs inline outline-none border-none bg-transparent shadow-none w-24 focus:w-full"
                placeholder="Search an order"
                @input="filterOrders"
            /></span>
          </th>
          <th class="w-1/5 px-4 font-medium text-xs border-r border-b">Date</th>
          <th class="w-1/5 px-4 font-medium text-xs border-r border-b">
            Status
          </th>
          <th class="w-1/5 px-4 font-medium text-xs border-r border-b">
            Payment
          </th>
          <th class="w-1/5 px-4 font-medium text-xs border-b">More Options</th>
        </tr>
      </thead>
      <tbody v-if="ordersClone.length > 0">
        <tr class="relative" v-for="(order, idx) in ordersClone">
          <td class="border-r lg:px-4 py-2">
            <span class="font-medium text-xs">
              <p class="font-medium text-xs text-center m-0 px-1">
                {{ (page - 1) * 10 + idx + 1 }}
              </p>
            </span>
          </td>
          <td class="border-r px-4 py-2 relative">
            <p class="font-medium text-xs m-0 lowercase capitalize">
              {{ order.quantity }}
              {{
                order.service &&
                order.service.platform &&
                order.service.platform.name.toLowerCase()
              }}
              {{ order.varient && order.service.name }}
            </p>
            <p class="font-normal text-xs m-0">
              Link - <span class="">{{ order.meta }}</span>
            </p>
          </td>
          <td class="border-r px-4 py-2">
            <p class="font-medium text-xs text-center m-0">
              {{ new Date(order.created_at).toLocaleString() }}
            </p>
          </td>
          <td class="border-r px-4 py-2">
            <p
              class="font-medium text-xs text-center m-0 text-processing capitalize"
            >
              {{ order.status && order.status.toLowerCase() }}
            </p>
          </td>
          <td class="border-r px-4 py-2">
            <p
              class="font-medium text-xs text-center m-0"
              :class="order.amount == 0 ? 'text-primary' : 'text-dark'"
            >
              {{ order.amount == 0 ? 'Free' : getPaymentStatus(order.payment) }}
            </p>
          </td>
          <td class="px-4 py-6 relative">
            <svg-icon
              name="three_dots"
              @click="openOverflow(idx)"
              class="h-6 w-6 mx-auto cursor-pointer hover:text-primary"
            />
            <transition name="slide-fade">
              <div
                class="absolute bg-white shadow-lg rounded-lg w-150p py-2 right-0 top-0 mt-10 mr-12 z-20"
                v-if="overflowOpen === idx"
                v-click-outside="hideOverFlowMenu"
              >
                <p
                  class="px-4 py-2 m-0 text-sm cursor-pointer transition-colors duration-500 ease hover:bg-gray-200"
                  @click="repeatOrder(order.service && order.service.uid)"
                >
                  Repeat Order
                </p>
                <p
                  class="px-4 border-t-thin text-sm py-2 m-0 cursor-pointer transition-colors duration-500 ease hover:bg-gray-200"
                  @click="raiseIssue(order)"
                >
                  Raise an issue ?
                </p>
              </div>
            </transition>
          </td>
        </tr>
      </tbody>
      <div class="relative" v-if="ordersClone.length === 0">
        <div class="w-full my-12 flex justify-center">
          No orders found for the matched keyword
        </div>
      </div>
      <Paginate
        v-if="ordersClone.length > 0"
        :count="count"
        :currentPage="page"
        @page="changePage"
      />
    </table>

    <table
      v-if="orders && orders.length > 0"
      class="w-full h-full lg:w-0 lg:h-0 lg:opacity-0 lg:hidden table-fixed m-0"
    >
      <thead>
        <tr>
          <th
            class="w-1/12 py-3 font-medium text-xs border-r border-b text-center"
          >
            <p class="text-center">#</p>
          </th>
          <th
            class="w-full lg:w-1/2 px-4 font-medium text-xs lg:border-r border-b"
          >
            <span class="float-left">Order</span>
            <span class="float-right"
              ><svg-icon
                name="search"
                class="h-4 w-4 inline vertical-middle" /><input
                type="text"
                class="font-normal pl-2 text-xs inline outline-none border-none bg-transparent shadow-none w-24 focus:w-full"
                placeholder="Search an order"
                @input="filterOrders"
            /></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="relative" v-for="(order, idx) in ordersClone">
          <td class="border-r lg:px-4 py-2">
            <span class="font-medium text-xs">
              <p class="font-medium text-xs text-center m-0 px-1">
                {{ idx + 1 }}
              </p>
            </span>
          </td>
          <td class="border-r px-4 py-2 relative">
            <p class="font-medium text-xs m-0 lowercase capitalize">
              {{ order.quantity }}
              {{
                order.service &&
                order.service.platform &&
                order.service.platform.name.toLowerCase()
              }}
              {{ order.service && order.service.name }}
            </p>
            <p class="font-normal text-xs m-0">
              Link - <span class="">{{ order.meta }}</span>
            </p>
            <div class="block lg:hidden mt-4 relative flex">
              <div>
                <p class="font-medium text-xs m-0 mb-2 dim-text">Date</p>
                <p class="font-medium text-xs m-0 mb-2 dim-text capitalize">
                  Status
                </p>
                <p class="font-medium text-xs m-0 mb-2 dim-text">Payment</p>
              </div>
              <div class="ml-4">
                <p class="font-medium text-xs m-0 mb-2 text-dark">
                  {{ new Date(order.created_at).toLocaleString() }}
                </p>
                <p
                  class="font-medium text-xs m-0 mb-2 capitalize text-processing"
                >
                  {{ order.status && order.status.toLowerCase() }}
                </p>
                <p
                  class="font-medium text-xs m-0 mb-2"
                  :class="order.amount == 0 ? 'text-primary' : 'text-dark'"
                >
                  {{
                    order.amount == 0 ? 'Free' : getPaymentStatus(order.payment)
                  }}
                </p>
              </div>
            </div>
            <svg-icon
              name="three_dots"
              @click="openOverflow(idx)"
              class="lg:hidden absolute top-0 right-0 m-3 h-6 w-6 cursor-pointer hover:text-primary"
            />

            <transition name="slide-fade">
              <div
                class="lg:hidden mob absolute bg-white shadow-lg rounded-lg w-1/2 py-2 right-0 top-0 mt-6 mr-6 z-20"
                v-if="overflowOpen === idx"
                v-click-outside="hideOverFlowMenu"
              >
                <p
                  class="px-4 py-2 m-0 cursor-pointer hover:opacity-80 transition-colors duration-500 ease hover:bg-gray-200"
                  @click="repeatOrder(order.service && order.service.uid)"
                >
                  Repeat Order
                </p>
                <p
                  class="px-4 border-t-thin py-2 hover:opacity-80 m-0 cursor-pointer transition-colors duration-500 ease hover:bg-gray-200"
                  @click="raiseIssue"
                >
                  Raise an issue ?
                </p>
              </div>
            </transition>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="h-300p flex flex-col justify-center items-center p-4">
      <h3 class="font-medium text-lg">You have not placed any orders yet</h3>
      <p class="text-xs m-0">
        You are just one step away from getting famous. Become famous now
      </p>

      <div class="w-10/12 mt-12 flex justify-center">
        <a
          href="/"
          class="w-full font-medium text-center my-2 underline hover:text-primary"
          >Get started now with our services now</a
        >
      </div>
    </div>
    <modal-payment
      v-if="capturePayment"
      :crypto="parseInt(varient.discounted_price) >= 2"
      :order="order_id"
      :active_stripe="active_stripe"
      :product="`${this.capitalizeFirstLetter(
        this.service.platform.name.toLowerCase()
      )} ${this.service.name}`"
      :email="email || ($auth.user && $auth.user[0].email)"
      @close="closeDialog"
    />
  </div>
</template>

<script>
import Slider from '../../components/Slider'
import Paginate from '../../components/Paginate'
import ModalPayment from '@/components/ModalPayment'

export default {
  name: 'index',
  middleware: ['auth'],
  data: () => ({
    showPassword: false,
    overflowOpen: false,
    user: {},
    count: 0,
    page: 1,
    orders: [],
    ordersClone: [],
    capturePayment: false,
    order_id: null,
    active_stripe: null,
    varient: null,
    service: {
      name: '',
    },
  }),
  computed: {},
  async asyncData({ $axios }) {
    const resp = await $axios.get('get-orders/', { params: { page: 1 } })
    if (resp && !resp.isAxiosError) {
      return {
        count: resp.data && resp.data.count,
        ordersClone: resp.data && resp.data.results,
        orders: resp.data && resp.data.results,
      }
    }
  },
  components: {
    ModalPayment,
    Slider,
    Paginate,
  },
  methods: {
    closeDialog() {
      this.capturePayment = false
    },
    async repeatOrder(service) {
      this.loading = true
      this.service = service
      try {
        const resp = await this.$axios.$post('create-order/', {
          meta: this.link,
          email: this.email || (this.$auth.user && this.$auth.user[0].email),
          product_id: this.varient['uid'],
          current_order: service,
        })
        if (resp && resp.success) {
          if (resp.payment_url) {
            this.capturePayment = true
            this.order_id = resp.order_id
            this.active_stripe = resp.payment_url
          }
        } else {
          this.errorMessage = resp.message
        }
        this.loading = false
      } catch (e) {
        //this.error = e.response.data.message
        this.loading = false
        this.orderPlaced = false
        const { data } = e.response
        this.errorMessage = data && data.message
      }
    },
    openOverflow(idx) {
      this.overflowOpen = idx
    },
    filterOrders(e) {
      const { value } = e.target
      if (value && value.length > 0) {
        this.ordersClone = this.orders.filter((order) => {
          return JSON.stringify(order)
            .toLowerCase()
            .includes(value.toLowerCase())
        })
      } else {
        this.ordersClone = this.orders.slice(0, 11)
      }
    },
    async changePage(page) {
      this.page = page
      const resp = await this.$axios.get('get-orders/', {
        params: { page: page },
      })
      if (resp && !resp.isAxiosError) {
        this.count = resp.data && resp.data.count
        this.ordersClone = resp.data && resp.data.results
        this.orders = resp.data && resp.data.results
      }
    },

    getPaymentStatus(payment) {
      if (payment && payment.payment_status == 'PENDING') {
        return 'Pending Payment'
      } else if (payment && payment.payment_status == 'COMPLETED') {
        return '$' + payment.amount
      } else if (payment && payment.payment_status == 'FAILED') {
        return 'Payment Failed'
      }
      return 'Processing Payment'
    },
    async getOrders() {
      const resp = await this.$axios.get('get-orders/')
      if (resp && !resp.isAxiosError)
        return {
          orders: resp.data && resp.data.results,
        }
    },
    async raiseIssue(order) {
      const productName = `${order.quantity} ${
        order.product &&
        order.product.platform &&
        order.product.platform.name.toLowerCase()
      } ${order.product && order.product.name}`
      const subject = `Issue regarding order for ${productName}`,
        body = `Hi,
I have facing an issue regarding order for ${productName} with #order-id ${order.uid}`
      this.$router.push('/dashboard/support?new-ticket=true')
      // const resp = await this.$axios.get('get-orders/');
      // if (resp && !resp.isAxiosError)
      //   return {
      //     orders: resp.data && resp.data.results
      //   }
    },
    hideOverFlowMenu() {
      this.overflowOpen = -1
    },
  },
}
</script>

<style scoped>
.light-text {
  color: rgba(255, 255, 255, 0.7);
}
</style>
