<template>
  <div v-click-outside="closeOverflow" class="relative">
    <div class="w-full flex items-center relative">
      <div type="text"
           @click="openOverflow"
           class="cursor-pointer w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none">
        <p class="text-placeholdr" v-if="selectedProduct===null|| selectedProduct===''">Choose one of the services
          below</p>
        <p v-else class="">
          <span>{{ `${productx.quantity}`}}</span>
          <span>{{ service.name }}</span><span
          class="text-primary font-medium float-right pr-8">{{ selectedProduct.discounted_price == '0' ? 'Free' : '$' + selectedProduct.discounted_price
          }}</span></p>
      </div>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
        <svg-icon name="right_arrow" class="h-3 w-3" />
      </div>
    </div>
    <div v-if="overflow"
         class="absolute mt-2 w-full border border-light_thin shadow-lg px-4 py-3 bg-dim rounded-lg max-h-half overflow-y-scroll">
      <div class="list-none m-0 p-0 flex flex-col">
        <div class="" v-for="(product,idx) in products" v-if="productx.platform===product.platform"
             @click="setSelectedProduct(product)">
          <div class="py-4 rounded px-2 hover:bg-dim_border text-sm flex justify-between cursor-pointer"
               :class="idx===products.length-1 ? '':'border-b-dim'">
            <div class="flex items-center">
              <div class="flex">
                <span class="mr-2">Buy {{ product.quantity }}</span>
                <span>{{ service.name }}</span>
              </div>
              <span class="text-xs" v-if="product.percent_discount!=='0'">{{ product.percent_discount }}% Off</span>
            </div>
            <div class="flex items-center flex-col ml-4">
              <span class="line-through font-medium" v-if="product.percent_discount!=='0'">${{ product.original_price
                }}</span>
              <span class="text-primary font-medium"
                    :class="product.percent_discount==='0'?'':'mb-4'">{{ product.discounted_price == '0' ? 'Free' : '$' + product.discounted_price
                }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesList',
  props: ['products', 'productx','service'],
  data: () => ({
    username: null,
    selectedProduct: null,
    overflow: false
  }),
  watch:{
    $props: {
      handler() {
        this.selectedProduct = this.productx
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    openOverflow() {
      this.overflow = true
    },
    closeOverflow() {
      this.overflow = false
    },
    setSelectedProduct(product) {
      this.selectedProduct = product
      this.overflow = false
      this.$emit('change', product)
    }
  },
  mounted() {
    if (this.$props && this.$props.productx) {
      const { productx } = this.$props
      this.selectedProduct = productx
    }
  }
}
</script>

<style scoped>
.max-h-half {
  max-height: 50vh;
}
</style>
