<template>
  <form
    @submit.prevent="loginRequest"
    class="container mx-auto mt-16 mb-40 w-4/5 lg:w-1/3"
  >
    <h3 class="font-bold text-3xl mb-4">Login</h3>
    <transition name="fade">
      <p
        v-if="errorMessage"
        class="text-xs bg-youtube_bg p-4 rounded-lg font-medium text-youtube text-center my-4"
      >
        {{ errorMessage }}.
      </p>
    </transition>
    <div class="w-full">
      <label class="font-medium text-xs"
        >Email <span class="ml-1 text-star">*</span></label
      >
      <div class="my-2 w-full flex items-center">
        <input
          type="email"
          required
          v-model="user.email"
          autocomplete="email"
          @input="clearWarning"
          class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
          placeholder="Enter your email here"
        />
      </div>
    </div>
    <div class="w-full">
      <label class="font-medium text-xs"
        >Password <span class="ml-1 text-star">*</span></label
      >
      <div class="my-2 w-full flex items-center">
        <input
          type="password"
          required
          v-model="user.password"
          @input="clearWarning"
          autocomplete="password"
          class="w-full border border-light_thin px-4 py-3 rounded-lg focus:border-primary focus:outline-none"
          placeholder="Enter your password here"
        />
      </div>
    </div>
    <div>
      <div
        @click.stop="openForgotDialog()"
        class="cursor-pointer m-0 text-xs text-left my-2 underline font-medium"
      >
        Forgot Password ?
      </div>
    </div>
    <button
      type="submit"
      class="mt-10 w-full bg-primary text-sm p-4 rounded-full text-white hover:bg-light border-none outline-none focus:outline-none"
    >
      <span v-if="!loading">Login</span>
      <loader-small v-else />
    </button>
    <modal-forgot-password v-if="showForgot" @close="closeDialog" />
  </form>
</template>

<script>
import ModalForgotPassword from '../components/ModalForgotPassword'
import LoaderSmall from '../components/LoaderSmall'

export default {
  name: 'login',
  layout: 'navheader',
  middleware: ['authrecheck'],
  data: () => ({
    showForgot: false,
    loading: false,
    errorMessage: null,
    user: {},
    host: '',
  }),
  asyncData({ req }) {
    return {
      host: req?.headers.host,
    }
  },
  head() {
    return {
      title:
        'Login | Buy Instagram Followers, Twitter Followers and YouTube Subscribers - Buy Real Follows',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Get Instagram Followers and likes delivered instantly',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'buy instagram followers, instagram followers, instagram likes, buy instagram likes, buy followers, buy real follows, buying instagram followers, instagram followers buy, likes on instagram, buy real instagram followers, buy real instagram likes, buy instagram power likes, buy ig followers, buy likes instagram, buy likes on instagram, cheap instagram followers, buy followers on instagram,  get instagram likes, buy instagram followers cheap, real instagram followers, buy ig views, buying instagram video views, buy twitter followers, twitter followers, twitter likes, buy twitter likes, buy real follows on twitter, buying twitter followers, twitter followers buy, likes on twitter, buy real twitter followers, buy real twitter likes, buy likes on twitter, cheap twitter followers, buy followers on twitter,  get twitter likes, buy twitter followers cheap, real twitter followers, buying twitter video views, buy youtube likes, youtube likes, buy real follows on youtube, buying youtube likes, youtube likes buy, likes on youtube, buy real youtube likes, buy real youtube likes, cheap youtube likes, buy likes on youtube,  get youtube likes, buy youtube likes cheap, real youtube likes, buying youtube video views, buy youtube subscribers, youtube subscribers, buying youtube subscribers, youtube subscribers buy, subscribers on youtube, buy real youtube subscribers, buy real youtube subscribers, cheap youtube subscribers, buy subscribers on youtube,  get youtube subscribers, buy youtube subscribers cheap, real youtube subscribers ',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Buy Instagram Followers, Twitter Followers and YouTube Subscribers - Buy Real Follows',
        },
        { hid: 'og:image', property: 'og:image', content: '/banner.webp' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Get Instagram Followers and likes delivered instantly',
        },
        {
          hid: 'og:keywords',
          name: 'og:keywords',
          content:
            'buy instagram followers, instagram followers, instagram likes, buy instagram likes, buy followers, buy real follows, buying instagram followers, instagram followers buy, likes on instagram, buy real instagram followers, buy real instagram likes, buy instagram power likes, buy ig followers, buy likes instagram, buy likes on instagram, cheap instagram followers, buy followers on instagram,  get instagram likes, buy instagram followers cheap, real instagram followers, buy ig views, buying instagram video views, buy twitter followers, twitter followers, twitter likes, buy twitter likes, buy real follows on twitter, buying twitter followers, twitter followers buy, likes on twitter, buy real twitter followers, buy real twitter likes, buy likes on twitter, cheap twitter followers, buy followers on twitter,  get twitter likes, buy twitter followers cheap, real twitter followers, buying twitter video views, buy youtube likes, youtube likes, buy real follows on youtube, buying youtube likes, youtube likes buy, likes on youtube, buy real youtube likes, buy real youtube likes, cheap youtube likes, buy likes on youtube,  get youtube likes, buy youtube likes cheap, real youtube likes, buying youtube video views, buy youtube subscribers, youtube subscribers, buying youtube subscribers, youtube subscribers buy, subscribers on youtube, buy real youtube subscribers, buy real youtube subscribers, cheap youtube subscribers, buy subscribers on youtube,  get youtube subscribers, buy youtube subscribers cheap, real youtube subscribers',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: `https://${this.host}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: this.host.includes('www')
            ? `https://${this.host}/login`
            : `https://www.${this.host}/login`,
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://api.buyrealfollows.com' },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `https://${this.host}`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Instagram Services',
                item: `https://${this.host}/instagram-services`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Youtube Services',
                item: `https://${this.host}/youtube-services`,
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Facebook Services',
                item: `https://${this.host}/facebook-services`,
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Login',
                item: `https://${this.host}/login`,
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Signup',
                item: `https://${this.host}/register`,
              },
              {
                '@type': 'ListItem',
                position: 7,
                name: 'Blog',
                item: `https://${this.host}/blog`,
              },
              {
                '@type': 'ListItem',
                position: 7,
                name: 'FAQ',
                item: `https://${this.host}/faq`,
              },
            ],
          },
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I start using Buyrealfollows.com?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To get started, you must first click the “REGISTER” button at the top right corner, or click “Premium Services” from the toolbar along the top if you are purchasing bulk services such as Followers, Likes, Views and Comments. You are then required to Log into and Register in our BuyRealFollows Members Area. To do this you simply enter your Instagram Username, Email address, and create a password. Then click on the “Create Account” button. Shortly after you will be sent a verification email to your email address. Simply open and verify the email. You may choose our Free Plans which allow you to activate every 12 hours, or our Paid Plans that require you to simply set it up once and you are done. Please Note: We do not obtain your login information or have ANY access to your Instagram account. You are NOT required to provide any password you use for your Instagram account. You ARE required to keep your account Public in order to use our services though.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is Buyrealfollows.com safe to use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Of Course! We are a safe and trusted service client all over the world, and growing. Your privacy and security is our #1 priority, which is why we have developed very strong coding and safe guarded the website using 256-bit encryption. We can’t say the same for other websites. It is very important you purchase these services from a reputable provider. We have been providing these services since 2018 and we are experts in the Industry. Remember, many times you get what you paid for, so if you see services that are so cheap you are likely going to get something that isn’t safe for your profile. We DO NOT require your Instagram Password, and do not have any access to your Instagram account.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do You get access to my Accounts login information?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ABSOLUTELY NOT! When you sign up for our service we do not ask for your Instagram, YouTube, Spotify  password, or require any of your login information. We simply need your  username to identify where to send the services to. Nothing more! We DO NOT have any control over your account. We CANNOT make your account Follow, Like or Comment on any other profiles.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I cancel my Paid Subscription?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'When you purchase our monthly subscription plans you will be automatically billed on the same day of each month. Hence, charges happen automatically. If at some point you no longer need your BuyRealFollows subscription, you can cancel it by logging into our Members Area and clicking on the Settings section where you will be able to cancel your payment. If you are having any difficulties simply send us a quick email and we can also complete your request.',
                },
              },
              {
                '@type': 'Question',
                name: 'When will I receive my order?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'All orders will be delivered within 24-72 hours of your purchase time. Usually, your order will begin shortly after you have completed payment, but depending on the quantity of the services you ordered, it may be spread out over the 24-72 hour time frame to ensure full delivery.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will these services get me banned?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely not! We provide Social Marketing services in the utmost safest manner that constantly changes with updates made by the Social Media Network. We can’t say the same for other websites. It is very important you purchase these services from a reputable provider. We have been providing these services since 2018  and we are experts in the Industry. Remember, many times you get what you paid for, so if you see services that are so cheap you are likely going to get something that isn’t safe for your profile.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will I get a refill if my followers drop off?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Definitely! Refill is 100% guaranteed. If your bought followers unfollow you, that isn’t under our control. But we will make sure that doesn’t happen. Even if that happens, we will make sure to send you a refill super fast.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is my order active?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Almost all subscription based orders are activated immediately upon checkout. Please note your order will stay at ‘processing’ until all your posts are used up or until your order is fully delivered. Upon completion the order status will change to ‘completed’. For real services including REAL auto likes & REAL comments, please note that these cannot be delivered instantly as these are not bot based services.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you do custom orders?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we do custom orders. However, we cannot do custom orders for quantities lower than those mentioned on our site. For each service, the lowest quantity that you see on our site is what we can technically do. Lower than those is not possible. For a higher quantity order, in most cases, we can help with those. And for everything else related to social media and PR – we would love to hear your requirements.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will my subscription auto-renew?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Our subscriptions do not renew automatically as these are not monthly subscriptions and instead based on posts. Whenever your order is exhausted or expired, you will get an automated email from our site informing you of the same. At such a point you can always buy the service again from our site.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will my subscription expire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our subscriptions do not require monthly renewal. Orders last for as long as your posts are remaining in the plan or until 180 days, whichever comes first. Once 180 days have crossed from the date of the order for the subscription, the order will automatically be closed and marked as complete. Please note that the 6 month validity applies to all subscriptions and certain subscriptions may have shorter validity as mentioned on service pages.',
                },
              },
              {
                '@type': 'Question',
                name: 'What payment options do I have?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'On our checkout page you will find two payment methods. Primary (default) payment method allows you to checkout using any Visa or MasterCard credit or debit card. Simply fill in the details and place the order. Our secondary payment method named PayOp gives users to choose from dozens of payment options including EPS, Skrill, Union Pay, PayTM and many more. Unfortunately we do not accept American Express and Discover cards at the moment.',
                },
              },
              {
                '@type': 'Question',
                name: 'My payment was declined, what do I do now?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'When a credit card is declined, our leading recommendation is to contact your bank for further assistance as they may have more insight into what may be causing the issue. All our transactions are 3DS secured, which may require you to verify ownership of card via OTP from your bank. If you have no luck resolving the issue with your banking institution, please contact our friendly support team at support@buyrealfollows.com',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you accept PayPal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes our site supports PayPal. You can also use any Visa or MasterCard credit or debit card on our site. Additionally, you also have the option to checkout with over numerous payment methods including EPS, Union Pay and BitPay among others. In case of orders exceeding $5000 you can also request for bank wire payment method details.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does a refund take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most refunds take no longer than 2-3 business days. However, the speed of refunds depend a lot on your bank delays. In case a refund is not received within a maximum of 5 business days you can always contact us for further assistance via support@buyrealfollows.com.',
                },
              },
            ],
          },
        },
      ], //G-0395XL210H
    }
  },
  components: { ModalForgotPassword, LoaderSmall },
  methods: {
    openForgotDialog() {
      this.showForgot = true
    },
    closeDialog() {
      this.showForgot = false
    },
    async loginRequest(e) {
      e.preventDefault()
      this.loading = true
      try {
        const resp = await this.$auth.loginWith('local', {
          data: this.user,
        })

        if (resp && !resp.isAxiosError) {
          this.$router.push({ path: '/dashboard' })
        }
      } catch (err) {
        this.loading = false
        const { data } = err.response
        this.errorMessage = data && data.message
      }
    },
    clearWarning() {
      this.errorMessage = null
    },
  },
}
</script>

<style scoped></style>
