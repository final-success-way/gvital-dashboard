<template>
  <div class="flex items-center">
    <div v-for="(platform,idx) in platforms.slice(0,4)">
      <a :href="'/'+platform.slug" class="cursor-pointer text-right top-16">
        <div class="dropdown relative inline-block text-left">
          <div
            class="inline-flex capitalize items-center justify-center w-full px-4 text-sm rounded-md bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {{ platform.name.toLowerCase() }}
            <svg-icon name="right_arrow" class="h-2 w-2 ml-1 inline" />
          </div>
          <div
            class="dropdown-content chevron -ml-4 pt-2 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative p-4 bg-white">
                <a :href="`/${platform.slug}/${service.slug}`" v-for="(service,idxx) in platform.services"
                   class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="ml-4">
                    <p class="font-base text-gray-900 capitalize">
                      Buy {{ platform.name.toLowerCase() }} {{ service.name }}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div v-if="platforms.length >= 5" class="dropdown cursor-pointer text-right">
      <div class="inline-block text-left">
        <div>
          <div
            class="inline-flex bg-yellow_bg capitalize items-center justify-center w-full px-4 py-3 text-sm rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Other
            <svg-icon name="right_arrow" class="h-2 w-2 ml-1 inline" />
          </div>
        </div>
        <div class="dropdown-content absolute right-0 cursor-pointer text-right top-10">
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div
              class="flex flex-wrap list-none chevron w-screen mx-auto max-w-xl origin-top-right px-8 py-8 mt-2 bg-white rounded-md shadow-lg border border-light ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div v-for="(platform,idx) in platforms.slice(4,platforms.length)" :key="idx" class="flex-1 mb-4"
                   :class="idx < platforms.length-1 ? 'pr-8':''">
                <div class="inline-block text-left w-full">
                  <div
                    class="text-white inline-flex capitalize items-center justify-center w-full font-medium px-4 py-2 text-sm rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    :class="platform.name.toLowerCase()">
                    <a :href="'/'+platform.slug">
                      {{ platform.name.toLowerCase() }}
                    </a>
                  </div>
                  <div class="mt-2">
                    <a :href="`/${platform.slug}/${service.slug}`" v-for="(service,idxx) in platform.services"
                       class="text-md list-none flex-1 flex flex-col my-2 capitalize" :key="idxx">
                      Buy {{ platform.name.toLowerCase() }} {{ service.name }}
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex-1" v-if="platforms.slice(4,platforms.length).length<2"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DropdownHeader',
  props: ['platforms']
}
</script>
<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 10;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/*.chevron:before, .chevron:after {
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid white;
  position: absolute;
  top: 0;
  right: 45%;
  margin: 0 0 0 -3px;
}

.chevron:before {
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid;
  border-top-color: inherit; !* Can't be included in the shorthand to work *!
  position: absolute;
  top: 0;
  right: 45%;
  margin: 0 0 0 -3px;
}*/

.w-68 {
  width: 24rem;
}

.linkedin {
  background-color: #0a66c2;
}

.spotify {
  background-color: #1ed760;
}
.tiktok {
  background-color: #000000;
}

.youtube {
  background-color: #ff0000;
}

.facebook {
  background-color: #4267b2;
}

.instagram {
  background-color: #833ab4;
}

.twitter {
  background-color: #1da1f2;
}

.soundcloud {
  background-color: #0a66c2;
}
</style>
