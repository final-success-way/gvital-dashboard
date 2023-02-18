<template>
  <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
          Blog
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Learn to grow your social media.
        </p>
      </div>
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              :src="post.imageUrl"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="'/blog/' + post.slug" class="block mt-2">
                <p class="text-xl font-medium text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <span>
                  <span class="sr-only"
                    >{{ post.author.first_name }}
                    {{ post.author.last_name }}</span
                  >
                  <img
                    class="h-10 w-10 object-contain"
                    src="/icon.webp"
                    alt=""
                  />
                </span>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <span>
                    {{ post.author.first_name }} {{ post.author.last_name }}
                  </span>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.created_at">
                    {{ new Date(post.created_at).toDateString() }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.readingTime }} read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'navheader',
  data: () => ({
    posts: [],
  }),
  async asyncData({ $axios, route }) {
    const { params, query } = route
    try {
      const resp = await $axios.get('posts/')
      if (resp && !resp.isAxiosError) {
        return {
          posts: resp.data && resp.data.results,
        }
      }
    } catch (e) {
      return {
        posts: [],
      }
    }
  },
}
</script>

<style scoped></style>
