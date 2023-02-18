<template>
  <div>
    <transition name="fade">
      <p v-if="errorMessage"
         class="container mx-auto w-4/5 lg:w-1/3 text-xs bg-youtube_bg p-3 rounded-lg font-medium text-youtube text-center my-2">
        {{ errorMessage }}.</p>
    </transition>
    <div class="container mx-auto mt-8 mb-40 w-11/12 lg:w-2/3 flex flex-col lg:flex-row justify-between">
      <div class="lg:w-1/2 mr-2">
        <h3 class="font-bold text-xl lg:text-3xl mb-4 text-center">Select your posts</h3>
        <div class="w-full">
          <div class="my-2 w-full flex items-center flex-col rounded-xl bg-dim p-6">
            <p class="w-full p-2 rounded-lg m-0 text-center mb-1 text-sm" v-if="selected">
              <b>{{ Object.keys(selected).length }}
                posts</b> selected / <b>{{ distribution }} likes</b>
              per post</p>
            <div class="grid grid-cols-3 grid-rows-3 gap-2">
              <div v-if="instaProfile && instaProfile.all_posts && instaProfile.all_posts.edges"
                   v-for="(post,idx) in instaProfile.all_posts.edges" :key="idx"
                   class="relative cursor-pointer"
                   @click="minCheckDistribute(qty,post && post.node,idx,max)">
                <img :src="post.node && post.node.display_url" class="rounded-lg h-full w-full object-cover" />
                <svg-icon v-if="selected && selected[idx]" name="tick_checked"
                          class="h-6 w-6 absolute top-0 left-0 m-2 rounded-full border-2" />
                <div v-else class="h-6 w-6 absolute top-0 left-0 m-2 border-2 rounded-full" />
                <p v-if="selected && selected[idx]"
                   class="h-8 w-full bg-translucent absolute bottom-0 left-0 text-center text-xs pt-2 m-0 font-medium text-white">
                  +{{ distribution }} likes
                </p>
              </div>
            </div>
          </div>
        </div>
        <button type="submit"
                class="mt-4 w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
                @click="onLoadMore">
          <span v-if="!loadMore">Load More</span>
          <LoaderSmall v-else />
        </button>
      </div>
      <div class="lg:w-1/2 ml-2">
        <h3 class="font-bold text-xl lg:text-3xl mt-12 lg:mt-0 mb-4 text-center">Confirm your Instagram profile</h3>
        <div class="w-full">
          <div class="my-2 w-full flex items-center rounded-xl bg-dim p-6">
            <div class="w-1/4 flex justify-center items-center">
              <img :src="instaProfile && instaProfile.profile_pic_url"
                   class="w-16 h-16 lg:h-24 lg:w-24 rounded-full bg-light" />
            </div>
            <div class="w-3/4 ml-4 lg:ml-8 lg:mr-4">
              <h3 class="text-lg font-medium">{{ instaProfile && instaProfile.full_name }}</h3>
              <p class="text-sm m-0">@{{ instaProfile && instaProfile.username }}</p>

              <div class="border-t-dim flex pt-4 mt-4 justify-between">
                <div class="flex justify-center items-center flex-col">
                  <h3 class="lg:text-3xl font-bold">{{ instaProfile && instaProfile.posts }}</h3>
                  <p class="text-sm m-0">Posts</p>
                </div>
                <div class="flex justify-center items-center flex-col">
                  <h3 class="lg:text-3xl font-bold">{{ instaProfile && instaProfile.followers }}</h3>
                  <p class="text-sm m-0">Followers</p>
                </div>
                <div class="flex justify-center items-center flex-col">
                  <h3 class="lg:text-3xl font-bold text-center">{{ instaProfile && instaProfile.following }}</h3>
                  <p class="text-sm m-0 text-center">Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit"
                class="mt-10 w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
                @click="$emit('registerUser')">
          <span v-if="!loading">Confirm and get likes</span>
          <LoaderSmall v-else />
        </button>
        <button type="submit"
                class="mt-3 w-full bg-dim border border-light text-sm p-4 rounded-full hover:bg-light outline-none focus:outline-none"
                @click="$emit('resetInstaProfile')">
          <span>This is not me</span>
        </button>
        <p class="m-0 text-xs text-center my-2" v-if="!$auth.user">By proceeding you agree to our <a href="/terms"
                                                                                                     class="underline">terms
          and
          conditions</a> and <a class="underline" href="/privacy">privacy policy</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderSmall from '../components/LoaderSmall'
import md5 from 'md5';
export default {
  name: 'insta-info',
  props: ['loading', 'instaProfile', 'qty', 'max', 'errorMessage', 'product'],
  components: { LoaderSmall },
  data: () => ({
    loadMore: false,
    warning: null,
    distribution: 0,
    selected: {},
    page: 1,
    maxPer: 20,
    next: null,
    all_posts: []
  }),
  methods: {
    async onLoadMore() {
      this.loadMore = true;
      const { instaProfile } = this.$props
      if (this.next) {
        try {
          const data = {
            query_hash: 'f2405b236d85e8296cf30347c9f08c2a',
            variables: {
              id: instaProfile.id,
              first: 12,
              after: this.next
            }
          };
          const resp = await this.$axios.get("https://www.instagram.com/graphql/query/", {
            params: data
          });

          if(resp && resp.data && resp.data.status==="ok"){
            this.loadMore = false;
            const {user} = resp.data.data;
            if(user && user.edge_owner_to_timeline_media && user.edge_owner_to_timeline_media.edges){
              //this.all_posts.
              instaProfile.all_posts.edges = [...instaProfile.all_posts.edges,...user.edge_owner_to_timeline_media.edges];
              this.next = user && user.edge_owner_to_timeline_media.page_info && user.edge_owner_to_timeline_media.page_info.has_next_page ? user.edge_owner_to_timeline_media.page_info.end_cursor : null
            }
          }
        } catch (e) {
          this.loadMore = false;
        }
      }
    },
    minCheckDistribute(qty, post, idx) {
      const len = Object.keys(this.selected).length
      if(Object.keys(this.selected).length === 5) {
        this.errorMessage = 'You can\'t select more than 5 posts'
      }else{
        this.errorMessage = null
      }

      if (this.selected[idx]) {
        this.$delete(this.selected, idx)
        this.distribution = Math.round(qty / (Object.keys(this.selected).length === 0 ? 1 : Object.keys(this.selected).length))
      } else if (len < 5 && len < (qty / 20)) {
        this.$set(this.selected, idx, post.shortcode)
        if (len >= (qty / 20) || len >= 5) {
          this.errorMessage = 'You can\'t select less than 20 likes for each post'
        } else {
          this.distribution = Math.round(qty / Object.keys(this.selected).length)
        }
      }

      this.$emit('selection', Object.values(this.selected))
    }
  },
  mounted() {
    this.distribution = this.$props && this.$props['qty']
    this.maxPer = 0;
    const {instaProfile} = this.$props;
    this.next = instaProfile && instaProfile.all_posts && instaProfile.all_posts.next
  }
}
</script>

<style scoped>

</style>
