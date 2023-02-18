<template>
  <div class="container mx-auto mt-16 mb-40 w-11/12 lg:w-1/3">
    <h3 class="font-bold text-3xl mb-4 text-center">Confirm your Instagram profile</h3>
    <transition name="fade">
      <p v-if="errorMessage" class="text-xs bg-youtube_bg p-4 rounded-lg font-medium text-youtube text-center my-4">{{errorMessage}}.</p>
    </transition>
    <div class="w-full">
      <div class="my-2 w-full flex items-center rounded-xl bg-dim p-6">
        <div class="w-1/4 flex justify-center items-center">
          <img :src="instaProfile && instaProfile.profile_pic_url" class="w-16 h-16 lg:h-24 lg:w-24 rounded-full bg-light"/>
        </div>
        <div class="w-3/4 ml-4 lg:ml-8 lg:mr-4">
          <h3 class="text-lg font-medium">{{instaProfile && instaProfile.full_name}}</h3>
          <p class="text-sm m-0">@{{instaProfile && instaProfile.username}}</p>

          <div class="border-t-dim flex pt-4 mt-4 justify-between">
            <div class="flex justify-center items-center flex-col">
              <h3 class="lg:text-3xl font-bold">{{instaProfile && instaProfile.posts}}</h3>
              <p class="text-sm m-0">Posts</p>
            </div>
            <div class="flex justify-center items-center flex-col">
              <h3 class="lg:text-3xl font-bold">{{instaProfile && instaProfile.followers}}</h3>
              <p class="text-sm m-0">Followers</p>
            </div>
            <div class="flex justify-center items-center flex-col">
              <h3 class="lg:text-3xl font-bold text-center">{{instaProfile && instaProfile.following}}</h3>
              <p class="text-sm m-0 text-center">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="submit"
            class="mt-10 w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
            @click="$emit('registerUser')">
      <span v-if="!loading && !btnMessage">Confirm and get followers</span>
      <span v-else-if="!loading && btnMessage">{{ btnMessage }}</span>
      <LoaderSmall v-else/>
    </button>
    <button type="submit"
            class="mt-3 w-full bg-dim border border-light text-sm p-4 rounded-full hover:bg-light outline-none focus:outline-none"
            @click="$emit('resetInstaProfile')">
      <span>This is not me</span>
    </button>
    <p class="m-0 text-xs text-center my-2" v-if="$auth.user">By proceeding you agree to our <a href="/terms" class="underline">terms
      and
      conditions</a> and <a class="underline" href="/privacy">privacy policy</a></p>

  </div>
</template>

<script>
  import LoaderSmall from '../components/LoaderSmall'

  export default {
    name: "insta-info",
    props: ['loading', 'instaProfile','errorMessage','product','btnMessage'],
    components: {LoaderSmall},
  }
</script>

<style scoped>

</style>
