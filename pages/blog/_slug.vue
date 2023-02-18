<template>
  <div class="container mx-auto max-w-5xl py-12">
    <div v-if="posts.length > 0">
      <h1 class="font-medium text-4xl text-primary">{{ posts[0].title }}</h1>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <span>
            <span class="sr-only"
              >{{ posts[0].author.first_name }}
              {{ posts[0].author.last_name }}</span
            >
            <img class="h-10 w-10 object-contain" src="/icon.webp" alt="" />
          </span>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <span>
              {{ posts[0].author.first_name }} {{ posts[0].author.last_name }}
            </span>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time :datetime="posts[0].created_at">
              {{ new Date(posts[0].created_at).toDateString() }}
            </time>
            <span aria-hidden="true"> &middot; </span>
            <span> {{ posts[0].readingTime }} read </span>
          </div>
        </div>
      </div>
      <img
        :src="posts[0].imageUrl"
        loading="lazy"
        style="object-fit: contain"
        class="min-h-415 min-w-full h-415p w-full object-contain"
      />
      <div class="blog_content" v-html="posts[0].content"></div>
    </div>
    <div v-else>
      <div class="text-center">
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
          Blog not found
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  layout: 'navheader',
  data: () => ({
    posts: [],
  }),
  head() {
    return {
      title: this.posts && this.posts.length > 0 ? this.posts[0].title : '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            this.posts && this.posts.length > 0
              ? this.posts[0].description
              : '',
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
          content:
            this.posts && this.posts.length > 0 ? this.posts[0].title : '',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            this.posts && this.posts.length > 0
              ? this.posts[0].description
              : '',
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content:
            this.posts && this.posts.length > 0 ? this.posts[0].imageUrl : '',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.posts && this.posts.length > 0 ? this.posts[0].title : '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            this.posts && this.posts.length > 0 ? this.posts[0].imageUrl : '',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            this.posts && this.posts.length > 0
              ? this.posts[0].description
              : '',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://${this.host}${this.$route.fullPath}`,
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
    }
  },
  async asyncData({ $axios, route, req }) {
    const { params, query } = route
    try {
      const resp = await $axios.get('posts/', {
        params: { slug: params.slug },
      })
      if (resp && !resp.isAxiosError) {
        console.log(resp.data.results)
        return {
          host: req?.headers.host,
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

<style>
.blog_content h2 {
  font-weight: 500;
  color: #5347e3;
  line-height: 1.5rem;
  margin: 32px 0;
  font-size: 1.5rem;
}

.blog_content img {
  border-radius: 0.5rem;
  margin: 32px auto;
}

.blog_content p {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin: 18px 0;
  color: #5b6b82;
}

.blog_content .font-bold {
  font-weight: 600;
}

.blog_content h1 {
  font-size: 2.4rem;
  z-index: 998;
  line-height: 46px;
  color: #5347e3;
}

.blog_content a {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: #5347e3;
}

.blog_content ul li {
  font-weight: 400;
  font-size: 0.9rem;
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
.min-h-415 {
  min-height: 415px;
}
</style>
