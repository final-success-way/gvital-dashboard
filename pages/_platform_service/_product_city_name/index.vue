<template>
  <div>
    <div v-if="services.length === 0 && service.slug !== ''">
      <ol
        vocab="http://schema.org/"
        typeof="BreadcrumbList"
        class="list-none flex container mx-auto lg:max-w-6xl px-4 lg:px-8 mt-6"
      >
        <li
          property="itemListElement"
          typeof="ListItem"
          v-for="(breadCrumb, idx) in breadCrumbs"
        >
          <a
            :href="breadCrumb.url"
            class="text-sm font-base m-0"
            property="item"
            typeof="WebPage"
          >
            <span property="name">{{ breadCrumb.text }}</span>
          </a>
          <span v-if="idx < breadCrumbs.length - 1" class="mr-2">/</span>
          <meta property="position" :content="idx + 1" />
        </li>
      </ol>
      <h1
        class="container text-center mx-auto px-8 lg:max-w-6xl font-bold text-3xl mb-4 mt-12 capitalize"
      >
        Buy
        {{ service.platform.name.toLowerCase() }}
        <span>{{ service.name }}</span>
        <span v-if="currentCity">In {{ currentCity }}</span>
      </h1>
      <h2 class="m-0 text-xs text-center my-2">{{ serviceMessage }}</h2>
      <transition name="fade">
        <div class="p-4 lg:p-0">
          <p
            v-if="errorMessage"
            class="container mx-auto px-4 lg:px-8 lg:max-w-3xl text-xs bg-youtube_bg py-4 rounded-lg font-medium text-youtube text-center my-4"
          >
            {{ errorMessage }}.
          </p>
        </div>
      </transition>
      <div
        class="container mx-auto px-4 lg:px-8 lg:max-w-6xl flex flex-col lg:flex-row mt-8 mb-40 justify-between"
      >
        <div class="flex-1">
          <form
            @submit.prevent="createOrder"
            class="border rounded-lg p-4 lg:p-8"
          >
            <div class="w-full">
              <label class="font-medium text-sm"
                >Select your product
                <span class="ml-1 text-star">*</span></label
              >
              <services-list
                :products="service.varients"
                :productx="varient"
                :service="service"
                @change="changeSelectedProduct"
              />
            </div>
            <div class="w-full">
              <div class="my-2 w-full flex items-center">
                <input
                  type="text"
                  v-model="username"
                  required
                  autocomplete="on"
                  @input="clearWarning"
                  class="w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                  :placeholder="
                    service.link_placeholder.length > 0
                      ? service.link_placeholder
                      : 'Enter link'
                  "
                />
              </div>
            </div>
            <div class="w-full">
              <div class="my-2 w-full flex items-center">
                <input
                  type="email"
                  v-model="email"
                  required
                  autocomplete="on"
                  v-if="!$auth.user"
                  @input="clearWarning"
                  class="w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Enter your email here"
                />
                <input
                  type="email"
                  v-model="$auth.user && $auth.user[0] && $auth.user[0].email"
                  required
                  v-else
                  disabled
                  autocomplete="on"
                  @input="clearWarning"
                  class="hidden w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Enter your email here"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-1 lg:gap-2 my-4">
              <div class="text-xs lg:text-sm">
                <img
                  src="~/assets/tick_gr.svg"
                  class="h-4 my-2 inline mr-2 lg:mr-4"
                />Guaranteed Delivery
              </div>
              <div class="text-xs lg:text-sm">
                <img
                  src="~/assets/shield.svg"
                  class="h-4 my-2 inline mr-2 lg:mr-4"
                />100% Safe & Private
              </div>
              <div class="text-xs lg:text-sm">
                <img
                  src="~/assets/lock.svg"
                  class="h-4 my-2 inline mr-2 lg:mr-4"
                />No Password Required
              </div>
              <div class="text-xs lg:text-sm">
                <img
                  src="~/assets/phone.svg"
                  class="h-4 my-2 inline mr-2 lg:mr-4"
                />24/7 Support
              </div>
            </div>
            <button
              type="submit"
              class="w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
            >
              <span v-if="!loading">Buy Now</span>
              <loader-small v-else />
            </button>
            <div class="mt-4 flex justify-between">
              <span class="text-xs lg:text-sm">We accept</span>
              <div class="flex items-center">
                <img src="~/assets/mastercard@2x.webp" class="h-4 lg:h-6" />
                <img src="~/assets/bitcoin.svg" class="h-8 lg:h-8 mx-3" />
                <img src="~/assets/discover@2x.webp" class="h-3 lg:h-4" />
                <img
                  src="~/assets/american-express@2x.webp"
                  class="h-3 lg:h-4 mx-3"
                />
                <img src="~/assets/visa@2x.webp" class="h-3 lg:h-4" />
              </div>
            </div>
          </form>
        </div>
        <div class="flex-1 flex-col lg:pl-16">
          <h3 class="font-medium text-2xl capitalize mt-6 mb-2" v-if="varient">
            What benefits will I see if I buy<br class="hidden lg:block" />
            {{ service.platform.name.toLowerCase() }}
            <span v-if="$route.path.includes('services')">services</span>
            <span v-else>{{ service.name }}</span
            >?
          </h3>
          <ul class="list-none m-0 mb-8">
            <li class="flex items-center my-2">
              <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
              <p class="mb-0 ml-3 text-xs">
                Brings credibility and recognition to your profile
              </p>
            </li>
            <li class="flex items-center my-2">
              <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
              <p class="mb-0 ml-3 text-xs">Promotes new & organic growth</p>
            </li>
            <li class="flex items-center my-2">
              <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
              <p class="mb-0 ml-3 text-xs">Helps increase your engagement</p>
            </li>
            <li class="flex items-center my-2">
              <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
              <p class="mb-0 ml-3 text-xs">
                Orders are delivered within 24-72 hours
              </p>
            </li>
            <li class="flex items-center my-2">
              <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
              <p class="mb-0 ml-3 text-xs">
                Buyrealfollows will always deliver more than you purchased
              </p>
            </li>
          </ul>
          <h3 class="text-sm flex flex-col justify-center">
            <div class="flex">
              <img src="~/assets/star.svg" class="h-5 mr-2" />
              <img src="~/assets/star.svg" class="h-5 mr-2" />
              <img src="~/assets/star.svg" class="h-5 mr-2" />
              <img src="~/assets/star.svg" class="h-5 mr-2" />
              <img src="~/assets/star.svg" class="h-5 mr-4" />
            </div>
            <p class="mb-0 vertical-middle leading-7 text-xs text-secondary">
              Over 1,300+ customers have rated BuyRealFollows 5 star
            </p>
          </h3>
        </div>
      </div>
      <div
        v-if="varient === null"
        class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
      >
        <div class="h-16 w-16 mb-4">
          <svg-icon name="error" class="h-16 w-16" />
        </div>
        <h3 class="font-bold text-3xl text-center">Product Not Found</h3>
        <div class="border-t-dim h-1 w-full my-6"></div>
        <div class="pt-8">
          <h3 class="font-medium text-sm mb-2 text-center">
            You can checkout other products by clicking the button below
          </h3>
          <button
            class="w-full bg-primary text-xs py-3 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
          >
            <a href="/">Discover Products</a>
          </button>
        </div>
      </div>
      <div
        class="blog_content container mx-auto px-8 lg:max-w-6xl mb-4 mt-12"
        v-html="service.content"
      ></div>
    </div>

    <div
      v-else-if="services.length > 0"
      class="mx-auto lg:max-w-6xl mb-4 mt-12 capitalize"
    >
      <ol
        vocab="http://schema.org/"
        typeof="BreadcrumbList"
        class="list-none flex container mx-auto lg:max-w-6xl px-4 lg:px-0"
      >
        <li
          property="itemListElement"
          typeof="ListItem"
          v-for="(breadCrumb, idx) in breadCrumbs"
        >
          <a
            :href="breadCrumb.url"
            class="text-sm font-base m-0"
            property="item"
            typeof="WebPage"
          >
            <span property="name">{{ breadCrumb.text }}</span>
          </a>
          <span v-if="idx < breadCrumbs.length - 1" class="mr-2">/</span>
          <meta property="position" :content="idx + 1" />
        </li>
      </ol>
      <h3
        class="container text-center lg:text-left mx-auto lg:max-w-6xl font-bold text-3xl mb-4 mt-12 mb-12 capitalize"
      >
        {{ serviceName }}
      </h3>

      <div class="flex flex-col bg-white border rounded-lg w-full">
        <div class="flex rounded-t-lg overflow-hidden w-full h-auto">
          <div
            class="hidden lg:block border-r border-b py-4 px-8 font-medium w-1/5"
          >
            {{
              services[0] &&
              services[0].platform &&
              services[0].platform.name.toLowerCase()
            }}
            Services
          </div>
          <div
            class="flex overflow-x-scroll justify-between lg:justify-start border-b w-full lg:w-4/5 p-2"
          >
            <button
              class="capitalize border-none outline-none mr-4 lg:mx-4 px-8 py-1 text-sm rounded-lg cursor-pointer"
              @click.stop="setSelectedService(service)"
              :class="
                selected.uid === service.uid
                  ? 'bg-yellow_bg'
                  : 'bg-primary text-white'
              "
              v-for="(service, idx) in services"
            >
              {{ service.name }}
            </button>
          </div>
        </div>
        <div class="flex">
          <div
            v-if="selected"
            class="w-full justify-center p-8 flex flex-col lg:flex-row"
          >
            <div class="flex-1">
              <form @submit.prevent="createOrder" class="">
                <div class="w-full">
                  <label class="font-medium text-sm"
                    >Select your product
                    <span class="ml-1 text-star">*</span></label
                  >
                  <services-list
                    :products="selected.varients"
                    :productx="varient"
                    :service="selected"
                    @change="changeSelectedProduct"
                  />
                </div>
                <div class="w-full">
                  <div class="my-2 w-full flex items-center">
                    <input
                      type="text"
                      v-model="username"
                      required
                      autocomplete="on"
                      @input="clearWarning"
                      class="w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                      :placeholder="
                        selected.link_placeholder.length > 0
                          ? selected.link_placeholder
                          : 'Enter link'
                      "
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class="my-2 w-full flex items-center">
                    <input
                      type="email"
                      v-model="email"
                      required
                      autocomplete="on"
                      v-if="!$auth.user"
                      @input="clearWarning"
                      class="w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                      placeholder="Enter your email here"
                    />
                    <input
                      type="email"
                      v-model="
                        $auth.user && $auth.user[0] && $auth.user[0].email
                      "
                      required
                      v-else
                      disabled
                      autocomplete="on"
                      @input="clearWarning"
                      class="hidden w-full border border-light_thin px-4 py-3 bg-dim rounded-lg focus:border-primary focus:outline-none"
                      placeholder="Enter your email here"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2 grid-rows-2 gap-1 lg:gap-2 my-4">
                  <div class="text-xs lg:text-sm">
                    <img
                      src="~/assets/tick_gr.svg"
                      class="h-4 my-2 inline mr-2 lg:mr-4"
                    />Guaranteed Delivery
                  </div>
                  <div class="text-xs lg:text-sm">
                    <img
                      src="~/assets/shield.svg"
                      class="h-4 my-2 inline mr-2 lg:mr-4"
                    />100% Safe & Private
                  </div>
                  <div class="text-xs lg:text-sm">
                    <img
                      src="~/assets/lock.svg"
                      class="h-4 my-2 inline mr-2 lg:mr-4"
                    />No Password Required
                  </div>
                  <div class="text-xs lg:text-sm">
                    <img
                      src="~/assets/phone.svg"
                      class="h-4 my-2 inline mr-2 lg:mr-4"
                    />24/7 Support
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
                >
                  <span v-if="!loading">Buy Now</span>
                  <loader-small v-else />
                </button>
                <div class="mt-4 flex justify-between">
                  <span class="text-xs lg:text-sm">We accept</span>
                  <div class="flex items-center">
                    <img src="~/assets/mastercard@2x.webp" class="h-4 lg:h-6" />
                    <img src="~/assets/bitcoin.svg" class="h-8 lg:h-8 mx-3" />
                    <img src="~/assets/discover@2x.webp" class="h-3 lg:h-4" />
                    <img
                      src="~/assets/american-express@2x.webp"
                      class="h-3 lg:h-4 mx-3"
                    />
                    <img src="~/assets/visa@2x.webp" class="h-3 lg:h-4" />
                  </div>
                </div>
              </form>
            </div>
            <div class="flex-1 flex-col lg:pl-16">
              <h3
                class="font-medium text-2xl capitalize mt-6 mb-2"
                v-if="selected.varients[0]"
              >
                What benefits will I see if I buy<br class="hidden lg:block" />
                {{ selected.platform.name.toLowerCase() }}
                <span>{{ selected.name }}</span
                >?
              </h3>
              <ul class="list-none m-0 mb-8">
                <li class="flex items-center my-2">
                  <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
                  <p class="mb-0 ml-3 text-xs">
                    Brings credibility and recognition to your profile
                  </p>
                </li>
                <li class="flex items-center my-2">
                  <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
                  <p class="mb-0 ml-3 text-xs">Promotes new & organic growth</p>
                </li>
                <li class="flex items-center my-2">
                  <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
                  <p class="mb-0 ml-3 text-xs">
                    Helps increase your engagement
                  </p>
                </li>
                <li class="flex items-center my-2">
                  <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
                  <p class="mb-0 ml-3 text-xs">
                    Orders are delivered within 24-72 hours
                  </p>
                </li>
                <li class="flex items-center my-2">
                  <img src="~/assets/tick_checked.svg" class="h-3 my-2" />
                  <p class="mb-0 ml-3 text-xs">
                    Buyrealfollows will always deliver more than you purchased
                  </p>
                </li>
              </ul>
              <div class="text-sm flex flex-col justify-center">
                <div class="flex">
                  <img src="~/assets/star.svg" class="h-5 mr-2" />
                  <img src="~/assets/star.svg" class="h-5 mr-2" />
                  <img src="~/assets/star.svg" class="h-5 mr-2" />
                  <img src="~/assets/star.svg" class="h-5 mr-2" />
                  <img src="~/assets/star.svg" class="h-5 mr-4" />
                </div>
                <p
                  class="mb-0 vertical-middle leading-7 text-xs text-secondary"
                >
                  Over 1,300+ customers have rated BuyRealFollows 5 star
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!currentCity" class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div v-for="(service, idx) in services" :key="idx" class="my-12 px-4">
          <div class="capitalize font-medium text-xl flex py-4">
            <a
              :href="'/' + service.platform.slug + '/' + service.slug"
              class="text-primary"
            >
              {{ service.platform.name.toLowerCase() }} {{ service.name }}
            </a>
          </div>

          <table class="table-auto w-full h-full m-0">
            <thead>
              <tr>
                <th
                  class="w-1/2 px-4 py-3 font-medium rounded rounded-t border-t border-l border-r border-b"
                >
                  <p class="text-primary float-left">Product</p>
                </th>
                <th
                  class="w-1/4 px-4 font-medium text-primary border-t border-r border-b"
                >
                  <span class="float-left">Price</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(varient, iidx) in service.varients"
                :key="iidx"
                class="relative my-4 text-sm"
              >
                <td class="border px-4 py-2">
                  <a
                    v-if="$route.params['product_city_name']"
                    :href="
                      '/' +
                      service.platform.slug +
                      '/' +
                      $route.params['product_city_name'] +
                      '/' +
                      service.slug
                    "
                    class="m-0"
                  >
                    {{ varient.quantity }} {{ service.name.toLowerCase() }}</a
                  >
                  <a
                    v-else
                    :href="'/' + service.platform.slug + '/' + service.slug"
                    class="m-0"
                  >
                    {{ varient.quantity }} {{ service.name.toLowerCase() }}</a
                  >
                  <span
                    class="ml-4 text-primary"
                    v-if="varient.percent_discount !== '0'"
                    >{{ varient.percent_discount }}% Off</span
                  >
                </td>
                <td class="border px-4 py-2 relative">
                  <span
                    class="line-through font-medium"
                    v-if="varient.percent_discount !== '0'"
                    >${{ varient.original_price }}</span
                  >
                  <span
                    class="text-primary font-medium"
                    :class="varient.percent_discount !== '0' ? '' : 'mb-4'"
                    >{{
                      varient.discounted_price == '0'
                        ? 'Free'
                        : '$' + varient.discounted_price
                    }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div
      v-else
      class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/2 flex flex-col justify-center items-center"
    >
      <div class="h-16 w-16 mb-4">
        <svg-icon name="error" class="h-16 w-16" />
      </div>
      <h3 class="font-bold text-3xl text-center">
        City / Service Not Supported
      </h3>
      <div class="border-t-dim h-1 w-full my-6"></div>
      <div class="pt-8">
        <h3 class="font-medium text-sm mb-4 text-center">
          You can checkout other services by clicking the button below
        </h3>
        <button
          class="w-full bg-primary text-sm py-3 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
        >
          <a href="/">Discover Services</a>
        </button>
      </div>
    </div>

    <modal-payment
      v-if="capturePayment"
      :crypto="parseInt(varient.discounted_price) >= 1"
      :order="order_id"
      :active_stripe="active_stripe"
      :redirect_url="$route.fullPath"
      :product="`${this.capitalizeFirstLetter(
        this.service.platform.name.toLowerCase()
      )} ${this.service.name}`"
      :email="email || ($auth.user && $auth.user[0].email)"
      @close="closeDialog"
    />
  </div>
</template>

<script>
import ModalPayment from '@/components/ModalPayment'
import LoaderSmall from '@/components/LoaderSmall'
import ServicesList from '@/components/ServicesList'
import ameen from 'assets/0.webp'
import rohit from 'assets/1.webp'
import alexis from 'assets/2.webp'
import xingiho from 'assets/3.webp'
import zareen from 'assets/4.webp'

const cities = {
  myanmar: true,
  romania: true,
  barbados: true,
  mexico: true,
  ethiopia: true,
  'the-gambia': true,
  iraq: true,
  'norfolk-island': true,
  'macau sar (prc)': true,
  'macau-sar-(prc)': true,
  andorra: true,
  comoros: true,
  macau: true,
  burundi: true,
  qatar: true,
  morocco: true,
  chile: true,
  spain: true,
  singapore: true,
  lebanon: true,
  'new%20caledonia': true,
  'macau%20sar%20(prc)': true,
  'heard-and-mc-donald-islands': true,
  kazakhstan: true,
  brazil: true,
  netherlands: true,
  australia: true,
  montserrat: true,
  italy: true,
  mali: true,
  'north-korea': true,
  korea: true,
  germany: true,
  somalia: true,
  uzbekistan: true,
  macedonia: true,
  niger: true,
  guatemala: true,
  norway: true,
  lesotho: true,
  afghanistan: true,
  martinique: true,
  'libyan-arab-jamahiriya': true,
  algeria: true,
  libya: true,
  guam: true,
  'san-marino': true,
  'san%20marino': true,
  'french-guiana': true,
  maldives: true,
  'saint-helena': true,
  cuba: true,
  syria: true,
  guinea: true,
  liechtenstein: true,
  canada: true,
  bolivia: true,
  'american-samoa': true,
  angola: true,
  fiji: true,
  bahamas: true,
  luxembourg: true,
  grenada: true,
  'new-zealand': true,
  albania: true,
  belgium: true,
  'faroe-islands': true,
  'british-virgin-islands': true,
  'vatican-city-state': true,
  japan: true,
  poland: true,
  vanuatu: true,
  cameroon: true,
  'cocos-islands': true,
  congo: true,
  armenia: true,
  belize: true,
  palau: true,
  finland: true,
  bahrain: true,
  'wallis-and-futuna-islands': true,
  greenland: true,
  israel: true,
  denmark: true,
  georgia: true,
  chad: true,
  'northern-mariana-islands': true,
  'norfork-island': true,
  kenya: true,
  china: true,
  'marshall-islands': true,
  'russian-federation': true,
  paraguay: true,
  'cocos--islands': true,
  mauritania: true,
  'netherlands-antilles': true,
  reunion: true,
  aruba: true,
  malaysia: true,
  peru: true,
  'cook-islands': true,
  oman: true,
  kosovo: true,
  namibia: true,
  'western-sahara': true,
  colombia: true,
  turkey: true,
  'ivory-coast': true,
  greece: true,
  'central-african-republic': true,
  mayotte: true,
  azerbaijan: true,
  zambia: true,
  botswana: true,
  portugal: true,
  bermuda: true,
  uganda: true,
  micronesia: true,
  senegal: true,
  france: true,
  'solomon-islands': true,
  antarctica: true,
  mozambique: true,
  egypt: true,
  'new-caledonia': true,
  jersey: true,
  bangladesh: true,
  russia: true,
  nepal: true,
  'hong-kong': true,
  nicaragua: true,
  pakistan: true,
  ecuador: true,
  'saudi-arabia': true,
  'united-kingdom': true,
  tanzania: true,
  'micronesia-': true,
  kiribati: true,
  eritrea: true,
  anguilla: true,
  'french-polynesia': true,
  gibraltar: true,
  'trinidad-and-tobago': true,
  'guinea-bissau': true,
  liberia: true,
  venezuela: true,
  philippines: true,
  honduras: true,
  'costa-rica': true,
  nauru: true,
  iran: true,
  bhutan: true,
  tajikistan: true,
  jamaica: true,
  cyprus: true,
  togo: true,
  'syrian-arab-republic': true,
  'bouvet-island': true,
  tokelau: true,
  vietnam: true,
  sudan: true,
  'macau-sar': true,
  gambia: true,
  india: true,
  'czech-republic': true,
  'cayman-islands': true,
  'united-arab-emirates': true,
  malawi: true,
  croatia: true,
  mauritius: true,
  jordan: true,
  lithuania: true,
  'puerto-rico': true,
  'equatorial-guinea': true,
  monaco: true,
  niue: true,
  svalbard: true,
  'saint-kitts-and-nevis': true,
  'east-timor': true,
  brunei: true,
  latvia: true,
  'french-southern-territories': true,
  pitcairn: true,
  'united-states-minor-outlying-islands': true,
  taiwan: true,
  benin: true,
  guadeloupe: true,
  montenegro: true,
  haiti: true,
  bulgaria: true,
  tuvalu: true,
  thailand: true,
  zimbabwe: true,
  belarus: true,
  'el-salvador': true,
  'united-states': true,
  guyana: true,
  'saint-pierre-and-miquelon': true,
  sweden: true,
  'antigua-and-barbuda': true,
  'brunei-darussalam': true,
  argentina: true,
  uruguay: true,
  serbia: true,
  iceland: true,
  'british-lndian-ocean-territory': true,
  yemen: true,
  kuwait: true,
  austria: true,
  rwanda: true,
  samoa: true,
  tonga: true,
  turkmenistan: true,
  malta: true,
  laos: true,
  'saint-vincent-and-the-grenadines': true,
  'the-bahamas': true,
  'turks-and-caicos-islands': true,
  madagascar: true,
  guernsey: true,
  swaziland: true,
  mongolia: true,
  moldova: true,
  'burkina-faso': true,
  'christmas-island': true,
  'pitcairn-islands': true,
  dominica: true,
  'sierra-leone': true,
  'bosnia-and-herzegovina': true,
  slovenia: true,
  'svalbarn-and-jan-mayen-islands': true,
  ghana: true,
  seychelles: true,
  indonesia: true,
  'south-georgia-south-sandwich-islands': true,
  ireland: true,
  cambodia: true,
  'virgin-islands-': true,
  'virgin-islands': true,
  'democratic-republic-of-the-congo': true,
  hungary: true,
  'south-africa': true,
  'dominican-republic': true,
  tunisia: true,
  panama: true,
  ukraine: true,
  gabon: true,
  djibouti: true,
  'cape-verde': true,
  'papua-new-guinea': true,
  'south-korea': true,
  slovakia: true,
  'sri-lanka': true,
  'sao-tome-and-principe': true,
  estonia: true,
  'falkland-islands': true,
  nigeria: true,
  zaire: true,
  switzerland: true,
  'saint-lucia': true,
  suriname: true,
  'the%20gambia': true,
  'norfolk%20island': true,
  'heard%20and%20mc%20donald%20islands': true,
  'north%20korea': true,
  'libyan%20arab%20jamahiriya': true,
  'french%20guiana': true,
  'saint%20helena': true,
  'american%20samoa': true,
  'new%20zealand': true,
  'faroe%20islands': true,
  'british%20virgin%20islands': true,
  'vatican%20city%20state': true,
  'cocos%20islands': true,
  'wallis%20and%20futuna%20islands': true,
  'northern%20mariana%20islands': true,
  'norfork%20island': true,
  'marshall%20islands': true,
  'russian%20federation': true,
  'cocos%20%20islands': true,
  'netherlands%20antilles': true,
  'cook%20islands': true,
  'western%20sahara': true,
  'ivory%20coast': true,
  'central%20african%20republic': true,
  'solomon%20islands': true,
  'hong%20kong': true,
  'saudi%20arabia': true,
  'united%20kingdom': true,
  'micronesia%20': true,
  'french%20polynesia': true,
  'trinidad%20and%20tobago': true,
  'guinea%20bissau': true,
  'costa%20rica': true,
  'syrian%20arab%20republic': true,
  'bouvet%20island': true,
  'macau%20sar': true,
  'czech%20republic': true,
  'cayman%20islands': true,
  'united%20arab%20emirates': true,
  'puerto%20rico': true,
  'equatorial%20guinea': true,
  'saint%20kitts%20and%20nevis': true,
  'east%20timor': true,
  'french%20southern%20territories': true,
  'united%20states%20minor%20outlying%20islands': true,
  'el%20salvador': true,
  'united%20states': true,
  'saint%20pierre%20and%20miquelon': true,
  'antigua%20and%20barbuda': true,
  'brunei%20darussalam': true,
  'british%20lndian%20ocean%20territory': true,
  'saint%20vincent%20and%20the%20grenadines': true,
  'the%20bahamas': true,
  'turks%20and%20caicos%20islands': true,
  'burkina%20faso': true,
  'christmas%20island': true,
  'pitcairn%20islands': true,
  'sierra%20leone': true,
  'bosnia%20and%20herzegovina': true,
  'svalbarn%20and%20jan%20mayen%20islands': true,
  'south%20georgia%20south%20sandwich%20islands': true,
  'democratic%20republic%20of%20the%20congo': true,
  'south%20africa': true,
  'dominican%20republic': true,
  'cape%20verde': true,
  'papua%20new%20guinea': true,
  'south%20korea': true,
  'sri%20lanka': true,
  'sao%20tome%20and%20principe': true,
  'falkland%20islands': true,
  'saint%20lucia': true,
  'virgin%20islands%20': true,
  'virgin%20islands': true,
}
export default {
  name: 'index',
  components: {
    ServicesList,
    ModalPayment,
    LoaderSmall,
  },
  async asyncData({ $axios, route, req }) {
    const { params, query } = route
    if (params && params.hasOwnProperty('product_city_name')) {
      console.log('City', cities[params.product_city_name])
      if (!cities[params.product_city_name]) {
        const resp = await $axios.get('platform-services-list/', {
          params: { slug: params['product_city_name'] },
        })
        if (resp && !resp.isAxiosError) {
          return {
            host: req?.headers.host,
            service: resp.data && resp.data.results && resp.data.results[0],
            varient:
              resp.data &&
              resp.data.results &&
              resp.data.results[0] &&
              resp.data.results[0].varients[0],
            placeholder: 'Enter link',
            faqs:
              (resp.data &&
                resp.data.results &&
                resp.data.results.length > 0 &&
                resp.data.results[0].faqs) ||
              [],
          }
        }
      } else {
        const resp = await $axios.get('platform-services-list/', {
          params: { slug: params['platform_service'] },
        })
        if (resp && !resp.isAxiosError) {
          console.log('Platform services', resp.data)
          return {
            host: req?.headers.host,
            services: resp.data && resp.data.results && resp.data.results,
            selected:
              resp.data && resp.data.results && resp.data.results.length > 0
                ? resp.data.results[0]
                : null,
            varient:
              resp.data && resp.data.results && resp.data.results.length > 0
                ? resp.data.results[0].varients[0]
                : false,
            placeholder: 'Enter link',
            faqs:
              (resp.data &&
                resp.data.results &&
                resp.data.results.length > 0 &&
                resp.data.results[0].faqs) ||
              [],
            currentCity: params.product_city_name,
          }
        }
      }
    }
  },
  computed: {
    serviceMessage() {
      return `Buy ${this.capitalizeFirstLetter(
        this.service.platform.name.toLowerCase()
      )}  ${this.serviceName} with Instant Delivery`
    },
    serviceName() {
      if (this.services.length > 0) {
        return `${this.capitalizeFirstLetter(
          this.services[0].platform.name.toLowerCase()
        )} Services in ${this.currentCity}`
      } else if (this.service) {
        return `${this.capitalizeFirstLetter(
          this.service.platform.name.toLowerCase()
        )} Services`
      }
      return 'Instagram Followers'
    },
    cityName() {
      if (this.services.length > 0) {
        return `${this.currentCity}`
      }
      return null
    },
    title() {
      if (this.service) {
        return `${this.service.seo_title}`
      }
      return 'BuyRealFollows | Buy Instagram Followers'
    },
    faqJSONLD() {
      return this.faqs.map((faq) => {
        return {
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        }
      })
    },
    authorName() {
      try {
        return this.reviews[
          parseInt(this.service.uid.charAt(0), 10) % this.reviews.length
        ].name
      } catch (e) {
        return this.reviews[0].name
      }
    },
    productReview() {
      if (this.service && this.services.length === 0) {
        return {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: `${this.service.seo_title} | Now $${this.varient?.discounted_price}`,
            image: [`https://${this.host}/icon.webp`],
            description: this.service.seo_description,
            brand: {
              '@type': 'Brand',
              name: 'Buyrealfollows',
            },
            sku: this.service.uid,
            gtin13: this.service.uid,
            review: {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: this.service?.review?.rating || 4,
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: this.authorName,
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.5',
              reviewCount: '1300',
            },
            offers: {
              '@type': 'Offer',
              url: `https://${this.host}/${this.service.platform.slug}/${this.service.slug}`,
              priceCurrency: 'USD',
              priceValidUntil: '2025-08-09',
              price: this.varient?.discounted_price,
              availability: 'https://schema.org/InStock',
            },
          },
        }
      }
      return ''
    },
    breadCrumbList() {
      const items = this.breadCrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item.text,
        },
      }))
      return {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org/',
          '@type': 'BreadcrumbList',
          itemListElement: items,
        },
      }
    },
    breadCrumbs() {
      if (!this.selected) {
        return [
          {
            text: 'Home',
            url: `https://${this.host}`,
          },
          {
            text: this.serviceName,
            url: `https://${this.host}/${
              this.service &&
              this.service.platform &&
              this.service.platform.slug
            }`,
          },
          {
            text: `${this.capitalizeFirstLetter(
              this.service.platform.name.toLowerCase()
            )} ${this.service.name}`,
            url: `https://${this.host}/${this.service.platform.slug}/${this.service.slug}`,
          },
        ]
      } else {
        return [
          {
            text: 'Home',
            url: `https://${this.host}`,
          },
          {
            text: `${this.capitalizeFirstLetter(
              this.selected.platform.name.toLowerCase()
            )} Services`,
            url: `https://${this.host}/${this.selected.platform.slug}`,
          },
          {
            text: this.currentCity,
            url: `https://${this.host}/${this.selected.platform.slug}/${this.$route.params.product_city_name}`,
          },
        ]
      }
    },
  },
  head() {
    return {
      title: this.service.seo_title || this.serviceName,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.service.seo_description || this.serviceMessage,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.service.seo_keywords,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `summary_large_image`,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@buyrealfollows1',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.service.seo_title || this.serviceName,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.service.seo_description || this.serviceMessage,
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: `https://${this.host}/banner.webp`,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.service.seo_title || this.serviceName,
        },
        { hid: 'og:image', property: 'og:image', content: '/banner.webp' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.service.seo_description || this.serviceMessage,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://${this.host}${this.$route.fullPath}`,
        },
        {
          hid: 'og:keywords',
          name: 'og:keywords',
          content: this.service.seo_keywords,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Buy Real Follows',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: this.host.includes('www')
            ? `https://${this.host}${this.$route.fullPath}`
            : `https://www.${this.host}${this.$route.fullPath}`,
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://api.buyrealfollows.com' },
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        },
        this.breadCrumbList,
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: this.faqJSONLD,
          },
        },
        this.productReview,
      ], //G-0395XL210H
    }
  },
  data: () => ({
    loading: false,
    placeholder: 'Enter link',
    message: '',
    varient: null,
    username: null,
    email: null,
    reviews: [
      {
        name: 'Ameen',
      },
      {
        name: 'Rohit',
      },
      {
        name: 'Alexis',
      },
      {
        name: 'Xingi Ho',
      },
      {
        name: 'Zareen',
      },
    ],
    service: {
      slug: '',
      seo_title: '',
      seo_description: '',
      platform: {
        name: '',
        slug: '',
      },
      review: {
        rating: '',
      },
    },
    order_id: null,
    capturePayment: false,
    currentCity: null,
    selection: [],
    faqs: [],
    selected: null,
    errorMessage: null,
    services: [],
    active_stripe: null,
    common_regex:
      '[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)',
  }),
  methods: {
    setSelectedService(service) {
      this.selected = service
      this.varient =
        service && service.varients && service.varients.length > 0
          ? service.varients[0]
          : false
    },
    capitalizeFirstLetter(string) {
      if (string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
      return ''
    },
    changeSelectedProduct(e) {
      this.errorMessage = null
      this.varient = e
    },
    closeDialog() {
      this.capturePayment = false
    },
    clearWarning() {
      this.error = null
      this.errorMessage = null
    },
    async createOrder() {
      this.loading = true
      this.current_order = localStorage.getItem('current_order')
      try {
        const resp = await this.$axios.$post('create-order/', {
          meta: this.username,
          email: this.email || (this.$auth.user && this.$auth.user[0].email),
          product_id: this.varient['uid'],
          selected: this.selection.toString(),
          current_order: this.current_order,
        })
        if (resp && resp.success) {
          this.password = resp.password
          if (resp.payment_url) {
            this.capturePayment = true
            this.order_id = resp.order_id
            this.active_stripe = resp.payment_url
            localStorage.setItem('current_order', resp.order_id)
          }
        } else {
          this.errorMessage = resp.message
        }
        this.loading = false
      } catch (e) {
        //this.error = e.response.data.message
        this.loading = false
        const { data } = e.response
        this.errorMessage = data && data.message
      }
    },
  },
  mounted() {
    const { params } = this.$route
    if (params && params['product_name']) {
      this.selected = params['product_name']
      this.service.varients.find((prod, idx) => {
        if (params['product_city_name'] === prod.uid) {
          this.placeholder = 'Enter link'
          return (this.varient = prod)
        }
      })
    }
  },
}
</script>

<style>
.blog_content h2 {
  font-weight: 600;
  color: #5347e3;
  font-size: 1.5rem;
  z-index: 998;
  line-height: 46px;
}

.blog_content h3 {
  font-weight: 500;
  color: #5347e3;
  font-size: 1.5rem;
  z-index: 998;
  line-height: 2rem;
}

.blog_content h4 {
  font-weight: 400;
  color: #5347e3;
  border-left: 3px solid #5347e3;
  padding-left: 8px;
  font-size: 1.2rem;
  z-index: 998;
  line-height: 2rem;
}

.blog_content img {
  border-radius: 0.5rem;
  margin: 32px auto;
}

.blog_content p {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin: 12px 0;
  color: #5b6b82;
}

.blog_content .font-bold {
  font-weight: 600;
}

.blog_content h1 {
  font-size: 1.5rem;
  z-index: 998;
  line-height: 46px;
  color: #5347e3;
}

.blog_content ul li {
  font-weight: 400;
  font-size: 1rem;
  color: #5b6b82;
  line-height: 1.82;
  padding-bottom: 10px;
}

.text ul li {
  font-weight: 400;
  font-size: 16px;
  color: #5b6b82;
  line-height: 1.82;
  letter-spacing: -0.015em;
}
</style>
