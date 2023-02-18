<template>
  <div>
    <div class="site container mx-auto px-8 lg:max-w-6xl bg-white pt-8">
      <header class="site-header flex justify-between items-center relative">
        <div class="site-branding">
          <a href="/">
            <img
              src="../assets/logo_header.svg"
              alt="Buy real follows logo"
              class="h-14 mt-4"
            />
          </a>
        </div>
        <img
          src="../assets/menu.svg"
          @click="showPremiumMenuMob = true"
          class="block lg:hidden h-4 lg:ml-0"
        />
        <nav class="hidden lg:flex">
          <div class="hidden lg:block menu-primary-container">
            <ul
              id="primary-menu"
              class="m-0 flex list-none items-center text-sm font-normal nav-menu"
            >
              <dropdown-header :platforms="packages" />
              <li
                v-if="!$auth.user"
                id="menu-item-19"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
              >
                <a href="/login">Login</a>
              </li>

              <a
                v-if="!$auth.user"
                id="menu-item-20"
                class="menu-item menu-item-type-post_type menu-item-object-page register-btn"
                href="/register"
                >Register</a
              >
              <a
                v-else
                id="menu-item-31"
                class="font-normal text-primary menu-item menu-item-type-post_type menu-item-object-page menu-item-31 text-primary"
                href="/dashboard"
                >My Dashboard</a
              >
            </ul>
          </div>
        </nav>
      </header>
      <div>
        <div>
          <h3
            class="container text-center mx-auto px-8 lg:max-w-6xl font-bold text-3xl mb-4 mt-12 capitalize"
          >
            About Us
          </h3>
        </div>
        <div class="flex justify-center flex-col mt-12">
          <div v-for="(listitem, idx) in list">
            <h3 class="text-xl font-medium underline">{{ listitem.title }}</h3>
            <div class="relative">
              <h4 class="font-normal text-sm my-6">{{ listitem.desc }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dim mt-16 lg:mt-48 py-16">
      <div class="container mx-auto px-8 lg:px-0 lg:max-w-6xl relative">
        <!--          <h2 class="text-3xl lg:text-5xl font-medium capitalize leading-tight mb-6">Services</h2>-->
        <!--          <h3 class="font-medium text-sm m-0">Facebook</h3>-->
        <!--          <p></p>-->
        <!--          <h3 class="font-medium text-sm m-0">Instagram</h3>-->
        <!--          <p></p>-->
        <!--          <h3 class="font-medium text-sm m-0">Youtube</h3>-->
        <!--          <p></p>-->

        <div class="footer py-16 flex flex-col lg:flex-row">
          <div class="lg:w-1/2">
            <p class="font-extrabold text-3xl lg:text-5xl">
              BuyReal<span class="text-primary">Follows.</span>
            </p>
            <p class="m-0 text-sm leading-loose">
              There are companies out there that can help relieve some of the
              pressure of<br />developing your Instagram presence, like us, Mr.
              Insta! In fact, we’re seriously<br />helping our clients by
              offering Instagram followers for free! That’s right–free!<br />With
              such a great deal you might be thinking, what’s the catch?
            </p>
          </div>
          <div class="lg:w-1/2 flex lg:justify-between mt-16">
            <ul class="list-none m-0 mr-16 lg:mr-0">
              <li>
                <h3 class="font-medium mb-4">Services</h3>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/instagram-services"
                  >Instagram</a
                >
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/youtube-services"
                  >Youtube</a
                >
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/spotify-services"
                  >Spotify</a
                >
              </li>
            </ul>
            <ul class="list-none m-0">
              <li>
                <h3 class="font-medium mb-4">Support</h3>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/contact">Contact</a>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/register">Signup</a>
              </li>
              <!--                <li class="my-2">-->
              <!--                  <a class="font-light text-sm" href="">Affiliates</a>-->
              <!--                </li>-->
              <!--                <li class="my-2">-->
              <!--                  <a class="font-light text-sm" href="">Support Email</a>-->
              <!--                </li>-->
            </ul>
            <ul class="hidden lg:block list-none m-0">
              <li>
                <h3 class="font-medium mb-4">BuyRealFollows</h3>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/about">About us</a>
              </li>
              <!--              <li class="my-2">-->
              <!--                <a class="font-light text-sm" href="/privacy">Privacy Policy</a>-->
              <!--              </li>-->
              <li class="my-2">
                <a class="font-light text-sm" href="/terms"
                  >Terms and conditions</a
                >
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
          <ul class="block lg:hidden list-none m-0 mt-8 lg:mt-0">
            <li>
              <h3 class="font-medium mb-4">BuyRealFollows</h3>
            </li>
            <li class="my-2">
              <a class="font-light text-sm" href="/about">About us</a>
            </li>
            <!--            <li class="my-2">-->
            <!--              <a class="font-light text-sm" href="/privacy">Privacy Policy</a>-->
            <!--            </li>-->
            <li class="my-2">
              <a class="font-light text-sm" href="/terms"
                >Terms and conditions</a
              >
            </li>
            <li class="my-2">
              <a class="font-light text-sm" href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-4 bg-primary text-white">
      <p class="text-center text-sm font-medium text-white">
        Copyright © 2022 BuyRealFollows LLC. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
import DropdownHeader from '~/components/DropdownHeader'

export default {
  name: 'about',
  components: { DropdownHeader },
  data: () => ({
    packages: [],
    list: [
      {
        title: 'Our Mission',
        desc: 'We at growth vital  believe in the concept of Community First. We work tirelessly to help our audiences to grow through social platforms. Our aim to beat the Instagram and YouTube algorithm through real Instagram followers and Likes that have almost killed organic reach. After buying real Instagram and Youtube followers from us, we will make sure you get the best to stand out from the crowd. Our community is our priority and helping them grow each day is our mission.',
      },
      {
        title: 'Our Vision',
        desc: 'At Growth Vital we focus on finding creative solutions to the changing world of influencer and business marketing i.e, helping you buy 100% real Instagram followers. In a world that is run by artificial intelligence and complex algorithms, we want to keep it simple, effective and updated. Our sole vision is to create brilliant solutions for influencers and businesses to allow them wider exposure and better services. We always keep our services of delivering genuine Instagram and YouTube followers fast-paced with the changing world of social media so that our community as a whole approach doesn’t get undermined. We believe in making our audience realise their calibre and cater to their kind of audiences and customers.',
      },
      {
        title: 'Our Pledge',
        desc: 'We will work wonders for you. The BuyRealFollows team works tirelessly to build smart and effective solutions for our customers to provide them real Instagram and YouTube followers and likes. We make sure that whatever you spend is worth it. Our Community approach is our forte. We always believe in working as a team and catering to the demanding needs of our customers. We pledge to serve you the best in the market at a reliable price.',
      },
      {
        title: 'Our Work',
        desc: 'We are Social Media giants. BuyRealFollows works as a Social Media Marketing Agency that helps build businesses and Influencers. We work to help you build your social empire of real Instagram, YouTube and Spotify followers and likes that love you for who you are. We are based in India. We offer our services worldwide to countries like UAE, USA, Canada etc. We are focused on providing genuine Instagram, YouTube, Spotify followers and likes. You will find a lot of services that are exclusive to BuyRealFollows. We work as a team round the clock to serve our Influencer and business communities with the best in the market. Buyrealfollows.com is owned and managed by',
      },
    ],
  }),
  head() {
    return {
      title:
        'About | Buy Instagram Followers, Twitter Followers and YouTube Subscribers - Buy Real Follows',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Buy real follows provide cheapest instagram followers, instagram likes, youtube likes, youtube subscribers, facebook likes and more. Check our cheapest service with the best rates in the market. Services start instantly and 24 Hrs customer supports.',
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
          content:
            'Buy real follows provide cheapest instagram followers, instagram likes, youtube likes, youtube subscribers, facebook likes and more. Check our cheapest service with the best rates in the market. Services start instantly and 24 Hrs customer supports.',
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
            ? `https://${this.host}/about`
            : `https://www.${this.host}/about`,
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://api.buyrealfollows.com' },
      ],
      script: [
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
  async asyncData({ $axios, req }) {
    const resp = await $axios.get('platform-list/')
    if (resp && !resp.isAxiosError) {
      //this.pricing = resp.data && resp.data.results
      return {
        host: req?.headers.host,
        packages: resp.data && resp.data.results,
      }
    }
  },
}
</script>

<style scoped></style>
