<template>
  <div>
    <div class="dropdown relative" v-for="(platform,idx) in platforms" :key="idx">
      <li
        class="menu-item capitalize menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-21">
        {{ platform.name }}
        <svg-icon name="right_arrow" class="h-2 w-2 ml-1 inline" />
      </li>
      <div
        class="dropdown-content absolute shadow-xl px-8 py-8 rounded-xl bg-white rounded-b-xl border border-light z-20" :class="idx===0 ?'-ml-32':idx===1?'-ml-44':''">
        <div class="list-none m-0 p-0 ">
          <div class="w-full flex">
            <div v-for="(service,idxx) in platform.services" class="flex-1 flex flex-col"
                 :class="idxx < platform.services.length-1 ?'mr-12':''" :key="idxx">
              <ul id="dropdown"  class="list-none m-0 p-0">
                <li v-for="(product, iidx) in service.products" class="mb-2 p-0 m-0 capitalize" :key="iidx">
                  <a class="text-xs" :href="'/buy-service/?p='+product.uid">Buy {{ product.quantity }} {{ product.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  props: ['platforms'],
}
</script>

<style scoped>
.dropdown {
  float: left;
  overflow: hidden;
  cursor: pointer;
}

ul#dropdown li {
  margin-left: 0;
  margin-right: 0;
  color: #40455F;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 10;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.-ml-44{
  margin-left: -11rem;
}

/*.dropdown-content:after {*/
/*  content: '';*/
/*  position: absolute;*/
/*  background: url(../assets/arrow_up.webp);*/
/*  background-repeat: no-repeat;*/
/*  background-size: contain;*/
/*  height: 80px;*/
/*  width: 100px;*/
/*  top: 0;*/
/*  left: 0;*/
/*  z-index: 9;*/
/*}*/
</style>
