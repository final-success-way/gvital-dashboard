<template>
  <div>
    <img
      src="../assets/mask_top_right.svg"
      class="hidden lg:block absolute top-0 right-0 w-26"
    />
    <div id="page" class="site container mx-auto lg:max-w-6xl bg-white pt-8">
      <header id="masthead" class="site-header flex justify-between relative">
        <div class="site-branding">
          <a href="/">
            <img
              loading="lazy"
              src="../assets/logo_header.svg"
              alt="Buy real follows logo"
              class="h-14 mt-4 ml-8 lg:ml-0"
            />
          </a>
        </div>
        <img
          id="mob-menu-toggle"
          src="../assets/menu.svg"
          alt="menu"
          @click="menuMob = true"
          class="block lg:hidden h-4 mt-4 mr-8 lg:ml-0"
        />
        <nav id="site-navigation" class="hidden lg:flex">
          <ul
            id="primary-menu"
            class="m-0 flex list-none items-center text-sm font-normal nav-menu"
          >
            <dropdown-header :platforms="platforms" />

            <li
              v-if="!$auth.user"
              id="menu-item-19"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
            >
              <a href="/login">Login</a>
            </li>
            <a
              v-else
              id="menu-item-31"
              class="ml-4 font-normal text-primary menu-item menu-item-type-post_type menu-item-object-page menu-item-31 text-primary"
              href="/dashboard"
              >My Dashboard</a
            >
            <a
              v-if="!$auth.user"
              id="menu-item-20"
              class="bg-primary text-white menu-item menu-item-type-post_type menu-item-object-page register-btn"
              href="/register"
              >Register</a
            >
          </ul>
        </nav>
      </header>
    </div>
    <div
      class="site container mx-auto lg:max-w-6xl flex flex-col lg:flex-row justify-center"
      xmlns="http://www.w3.org/1999/html"
    >
      <div class="w-full lg:w-1/2 inline mt-24">
        <h1
          class="font-medium text-3xl lg:text-5xl lg:font-bold flex lg:block justify-center px-8 lg:px-0"
        >
          Buy Real Follows
        </h1>
        <p class="hidden lg:block text-lg text-secondary leading-loose mb-16">
          Use our service to get targeted, high quality,<br />
          free Instagram followers! Unlimited activations available<br />
          to continue receiving daily growth. No surveys!
        </p>
        <p
          class="block lg:hidden text-lg text-secondary leading-loose mb-16 flex lg:block justify-center px-8 lg:px-0"
        >
          Use our service to get targeted, high quality, free Instagram
          followers! Unlimited activations available to continue receiving daily
          growth. No surveys!
        </p>
        <div class="flex flex-col lg:flex-row mb-16 mx-8 lg:mx-0">
          <a
            href="/instagram-services/buy-instagram-followers"
            class="text-center px-4 py-4 border border-primary bg-primary text-white rounded-full text-sm lg:mr-4 mb-4 lg:mb-0"
          >
            Buy Instagram Followers</a
          >
          <a
            href="/instagram-services/buy-instagram-likes"
            class="text-center px-4 py-4 border border-primary bg-primary text-white rounded-full text-sm lg:mr-4 mb-4 lg:mb-0"
          >
            Buy Instagram Likes</a
          >
          <a
            href="/instagram-services/buy-instagram-views"
            class="text-center px-4 py-4 border border-primary bg-primary text-white rounded-full text-sm"
          >
            Buy Instagram Views</a
          >
        </div>
        <h3 class="text-sm flex flex-col lg:flex-row item-center">
          <div class="flex justify-center">
            <img src="../assets/star.svg" class="h-6 mr-2" />
            <img src="../assets/star.svg" class="h-6 mr-2" />
            <img src="../assets/star.svg" class="h-6 mr-2" />
            <img src="../assets/star.svg" class="h-6 mr-2" />
            <img src="../assets/star.svg" class="h-6 mr-4" />
          </div>
          <p class="mb-0 text-center vertical-middle leading-7 text-secondary">
            Over 1,300+ customers have rated BuyRealFollows 5 star
          </p>
        </h3>
      </div>
      <div class="lg:w-1/2 flex items-center justify-center mt-12">
        <img src="../assets/banner_right.webp" class="lg:w-10/12" />
      </div>
    </div>
    <!--    <PremiumMenu v-if="showPremiumMenu" v-click-outside="closePremiumMenu" @close="closePremiumMenu"-->
    <!--                 :packages="packages" />-->
    <!--    <PremiumMenuMob v-if="!$auth.user && showPremiumMenuMob" @close="closePremiumMenu" :packages="packages" />-->
    <drawer-menu v-if="menuMob" @close="closeMenu" :platforms="platforms" />
    <div class="relative">
      <div class="content-top-bg"></div>
      <div class="bg-primary">
        <div class="flex justify-center flex-col">
          <h2 class="text-white text-center text-3xl font-medium">
            Why do you need<br />Buyrealfollows?
          </h2>
          <div class="relative">
            <div
              class="container mx-auto lg:max-w-6xl flex flex-col lg:flex-row justify-between"
            >
              <div
                class="lg:w-1/2 flex items-center justify-center lg:justift-start mt-12"
              >
                <img
                  src="../assets/banner_left_content_n.webp"
                  class="w-10/12"
                />
              </div>
              <div
                class="lg:w-1/2 flex pt-12 mt-24 flex-col items-center lg:items-start"
              >
                <p class="text-white font-medium text-2xl mb-6 mx-8 lg:mx-0">
                  Get real followers, from real people.<br
                    class="hidden lg:block"
                  />No bots, no fake accounts.
                </p>
                <p class="light-text font-normal text-lg mb-16 hidden lg:block">
                  We have over 500,000 people on our network<br />earning a
                  fraction of our revenue per action. Rest<br />assured that all
                  your followers are real.
                </p>
                <p
                  class="light-text font-normal text-lg mb-16 mx-8 lg:mx-0 block lg:hidden"
                >
                  We have over 500,000 people on our network earning a fraction
                  of our revenue per action. Rest assured that all your
                  followers are real.
                </p>
                <div class="flex mb-12 px-8 lg:px-0 lg:mx-4 w-full lg:w-auto">
                  <a
                    href="/instagram-services"
                    class="glow px-8 py-5 bg-white text-primary rounded-full text-sm lg:mr-4 shadow-lg rounded-full"
                    >Buy Instagram followers Now</a
                  >
                </div>
                <div
                  class="border rounded-xl p-6 bg-light-x text-white w-10/12"
                >
                  <p class="leading-loose text-white text-sm mb-4">
                    “I ordered over 10,000 followers from BuyRealFollows and
                    they<br />are all real accounts! I’m really happy with my
                    order.”
                  </p>
                  <div class="flex">
                    <img
                      src="../assets/mansi_jack@2x.webp"
                      class="h-12 w-12 mr-4"
                    />
                    <div>
                      <h3 class="text-white font-medium">Mansi Jackson</h3>
                      <p class="text-white text-xs mb-0">
                        Social Media Manager - @thewinersclub
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="../assets/semi-circle.svg"
              class="hidden lg:block absolute bottom-0 left-0 w-26"
            />
          </div>
          <div class="relative">
            <div
              class="container mx-auto lg:max-w-6xl flex flex-col-reverse lg:flex-row"
            >
              <div
                class="lg:w-1/2 flex pt-12 mt-24 flex-col items-center lg:items-start"
              >
                <h3 class="text-white font-medium text-2xl mb-6 mx-8 lg:mx-0">
                  Stand out from the crowd with<br class="hidden lg:block" />our
                  Instagram Likes.
                </h3>
                <p
                  class="light-text font-normal text-lg mb-16 mx-8 lg:mx-0 hidden lg:block"
                >
                  With the help of Buyrealfollows’s Instagram likes, you’ll<br />see
                  over 10x the growth, engagement, and<br />
                  retention compared to organically growing your<br />
                  video.
                </p>
                <p
                  class="light-text font-normal text-lg mb-16 mx-8 lg:mx-0 block lg:hidden"
                >
                  With the help of Buyrealfollows’s Instagram likes, you’ll see
                  over 10x the growth, engagement, and retention compared to
                  organically growing your video.
                </p>
                <div class="flex mb-12 px-8 lg:px-0 lg:mx-4 w-full lg:w-auto">
                  <a
                    href="/instagram-services/buy-instagram-likes"
                    class="glow px-8 py-5 bg-white text-primary rounded-full text-sm mr-4 shadow-lg rounded-full"
                    >Buy Instagram Likes Now</a
                  >
                </div>
                <div
                  class="border rounded-xl p-6 bg-light-x text-white w-10/12"
                >
                  <p class="leading-loose text-white mb-4">
                    “I ordered over 10,000 followers from BuyRealFollows and
                    they<br />are all real accounts! I’m really happy with my
                    order.”
                  </p>
                  <div class="flex">
                    <img
                      src="../assets/ayush_shuk@2x.webp"
                      class="h-12 w-12 mr-4"
                    />
                    <div>
                      <h3 class="text-white font-medium">Rohit Saxena</h3>
                      <p class="text-white text-xs mb-0">
                        Social Media Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 flex items-center justify-center mt-12">
                <img
                  src="../assets/banner_right_content_n.webp"
                  class="w-10/12"
                />
              </div>
            </div>
            <img
              src="../assets/half_hex.svg"
              class="hidden lg:block absolute bottom-0 right-0 abs-middle w-26"
            />
          </div>
        </div>
      </div>
      <div class="content-bottom-bg"></div>

      <div class="flex justify-center flex-col mt-32 relative">
        <p
          class="text-center text-3xl lg:text-5xl font-medium mt-20 capitalize leading-tight"
        >
          Pricing tailored for you
        </p>
        <p class="text-lg font-regular text-center mt-6 mb-20 px-8 lg:px-0">
          We provide you with the best packages for all your needs. You’ll
          find<br class="hidden lg:block" />something that suits you, no matter
          if you’re looking to buy likes for your<br />personal Instagram or a
          company account.
        </p>
        <img
          src="../assets/circle-hex-group_right.svg"
          class="abs-middle lg:transform lg:translate-y-0 absolute top-0 right-0 w-26"
        />
        <div class="relative">
          <div
            class="container mx-auto max-w-6xl hidden pricing lg:flex flex-col lg:flex-row relative"
          >
            <div
              class="pricing-inner flex-1 px-2 flex flex-col items-center lg:items-end"
              v-for="(price, idx) in pricing"
              :key="idx"
            >
              <div
                class="w-11/12 border-2 pb-6 border-16 flex flex-col items-center border-light"
              >
                <div
                  class="flex justify-center items-center p-8 mb-16 relative w-full"
                >
                  <img
                    src="../assets/mask_group.svg"
                    class="absolute top-0 left-0 w-full"
                  />
                  <div class="absolute top-0 left-0 w-full h-12">
                    <div class="relative" style="">
                      <p
                        class="font-medium text-brown_text z-10 absolute text-center w-full pt-4 text-xs leading-3"
                      >
                        Best Value Package
                      </p>
                      <img
                        src="../assets/sprite/svg/tagg.svg"
                        class="absolute top-0 left-0 w-full h-10"
                      />
                    </div>
                  </div>
                  <img
                    v-if="price.platform === 'INSTAGRAM'"
                    src="../assets/like_tag.svg"
                    class="h-10 z-10"
                  />
                  <img
                    v-if="price.platform === 'YOUTUBE'"
                    src="../assets/youtube.svg"
                    class="h-10 z-10 -mt-4"
                  />
                  <h3
                    class="font-medium text-white text-2xl ml-4 z-10 capitalize mt-4"
                  >
                    {{ price.quantity }}
                    {{ price.platform && price.platform.toLowerCase() }}
                    {{ price.name }}
                  </h3>
                </div>
                <ul class="list-none m-0">
                  <li
                    class="flex items-center"
                    v-if="
                      price.platform !== 'YOUTUBE' &&
                      price.name.includes('Followers')
                    "
                  >
                    <img src="../assets/users.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">
                      {{ price.real_users ? 'Real Users' : 'Active Users' }}
                    </p>
                  </li>
                  <li
                    class="flex items-center"
                    v-if="
                      price.platform !== 'YOUTUBE' &&
                      price.name.includes('Likes')
                    "
                  >
                    <img src="../assets/users.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">
                      {{
                        price.real_users
                          ? 'Likes from Real Users'
                          : 'Likes from Active Users'
                      }}
                    </p>
                  </li>
                  <li
                    class="flex items-center"
                    v-if="price.platform === 'YOUTUBE'"
                  >
                    <img src="../assets/users.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">
                      {{
                        price.real_users
                          ? 'Views from Real Users'
                          : 'Views from Active Users'
                      }}
                    </p>
                  </li>
                  <li class="flex items-center">
                    <img src="../assets/shield.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">No Password Required</p>
                  </li>
                  <li class="flex items-center">
                    <img src="../assets/timer.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">Starts within 5 seconds</p>
                  </li>
                  <li class="flex items-center">
                    <img src="../assets/phone.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">24/7 Support</p>
                  </li>
                </ul>
                <h3 class="font-medium mt-6 text-5xl">
                  {{ price.discounted_price == '0' ? '' : '$'
                  }}{{
                    price.discounted_price == '0'
                      ? 'Free'
                      : price.discounted_price
                  }}
                </h3>
              </div>
              <div class="flex w-11/12 justify-center my-4">
                <a
                  :href="'/instagram-services'"
                  class="w-full text-center px-12 py-4 bg-primary text-white rounded-full text-sm"
                  >Purchase Now</a
                >
              </div>
            </div>
          </div>

          <div class="flex lg:hidden flex-col lg:flex-row">
            <div
              class="flex-1 px-2 flex flex-col items-center lg:items-end"
              v-for="(price, idx) in pricing"
              :key="idx"
            >
              <div
                class="w-10/12 border-light border-2 pb-6 border-16 flex flex-col items-center"
              >
                <div
                  class="flex justify-center items-center p-8 mb-16 relative w-full"
                >
                  <img
                    src="../assets/mask_group.svg"
                    class="absolute top-0 left-0 w-full"
                  />
                  <img
                    v-if="price.platform === 'INSTAGRAM'"
                    src="../assets/like_tag.svg"
                    class="h-10 z-10"
                  />
                  <img
                    v-if="price.platform === 'YOUTUBE'"
                    src="../assets/youtube.svg"
                    class="h-10 z-10 -mt-4"
                  />
                  <div class="absolute top-0 left-0 w-full h-12">
                    <div class="relative" style="">
                      <p
                        class="font-medium text-brown_text z-10 absolute text-center w-full pt-4 text-xs leading-3"
                      >
                        Best Value Package
                      </p>
                      <img
                        src="../assets/sprite/svg/tagg.svg"
                        class="absolute top-0 left-0 w-full h-10"
                      />
                    </div>
                  </div>
                  <h3
                    class="font-medium text-white text-2xl ml-4 z-10 capitalize mt-4"
                  >
                    {{ price.quantity }}
                    {{ price.platform && price.platform.toLowerCase() }}
                    {{ price.name }}
                  </h3>
                </div>
                <ul class="list-none m-0">
                  <li
                    class="flex items-center"
                    v-if="
                      price.platform !== 'YOUTUBE' &&
                      price.name.includes('Followers')
                    "
                  >
                    <img src="../assets/users.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">
                      {{ price.real_users ? 'Real Users' : 'Active Users' }}
                    </p>
                  </li>
                  <li
                    class="flex items-center"
                    v-if="
                      price.platform !== 'YOUTUBE' &&
                      price.name.includes('Likes')
                    "
                  >
                    <img src="../assets/users.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">
                      {{
                        price.real_users
                          ? 'Likes from Real Users'
                          : 'Likes from Active Users'
                      }}
                    </p>
                  </li>
                  <li
                    class="flex items-center"
                    v-if="price.platform === 'YOUTUBE'"
                  >
                    <img src="../assets/users.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">
                      {{
                        price.real_users
                          ? 'Views from Real Users'
                          : 'Views from Active Users'
                      }}
                    </p>
                  </li>
                  <li class="flex items-center">
                    <img src="../assets/shield.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">No Password Required</p>
                  </li>
                  <li class="flex items-center">
                    <img src="../assets/timer.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">Starts within 5 seconds</p>
                  </li>
                  <li class="flex items-center">
                    <img src="../assets/phone.svg" class="h-4 my-2" />
                    <p class="mb-0 ml-4">24/7 Support</p>
                  </li>
                </ul>
                <h3 class="font-medium mt-6 text-5xl">
                  {{ price.discounted_price == '0' ? '' : '$'
                  }}{{
                    price.discounted_price == '0'
                      ? 'Free'
                      : price.discounted_price
                  }}
                </h3>
              </div>
              <div class="flex w-10/12 justify-center my-4">
                <a
                  :href="'/buy/?p=' + price.uid"
                  class="w-full text-center px-12 py-4 bg-primary text-white rounded-full text-sm"
                  >Purchase Now</a
                >
              </div>
            </div>
          </div>
          <div class="hidden ml-8 my-8 lg:ml-24 items-center">
            <svg-icon
              name="left"
              class="ml-2 prev-pr cursor-pointer w-8 h-8 lg:w-6 lg:h-6 inline"
            />
            <svg-icon
              name="right"
              class="next-pr cursor-pointer w-8 h-8 lg:w-6 lg:h-6 ml-4 inline"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-col relative">
        <div class="relative mt-16">
          <div
            class="container mx-auto lg:max-w-6xl flex flex-col-reverse lg:flex-row"
          >
            <div
              class="lg:w-1/2 px-8 lg:pl-8 flex pt-6 mt-8 items-top flex-col"
            >
              <h3 class="font-medium text-2xl mb-6">
                7 Reasons You Should Focus On Gaining<br
                  class="hidden lg:block"
                />
                Free Instagram Likes
              </h3>
              <p class="font-light mb-16 text-left">
                Getting noticed on Instagram can be one of the biggest
                game-changers out there to help your business take off. Gaining
                followers and likes helps spread awareness of your brand and
                reach potential customers. The popular image-sharing site boasts
                over 1 billion users, with over 500 million daily active users.
                Anyone and everyone are on Instagram, and with all of those
                people out there sharing and commenting on posts and pictures,
                you’d think gaining followers would be a piece of cake. But,
                like most things in life, building a well-established social
                media presence takes patience and determination. Even the
                experts say it’s hard work. According to Social Media Growth
                Specialist, Talia Koren, building a healthy following on any
                social media platform is a huge commitment, and gaining those
                precious likes and followers takes strategy, skill, and plenty
                of time.
              </p>
            </div>
            <div class="lg:w-1/2 flex items-center justify-center mt-12">
              <img src="../assets/like_1@2x.webp" class="w-4/5 lg:w-3/5" />
            </div>
          </div>
          <img
            src="../assets/circle-hex-group.svg"
            class="absolute top-0 lg:bottom-0 left-0 abs-middle w-26"
          />
        </div>
        <div class="relative mt-12 flex justify-center">
          <div class="w-10/12 lg:w-9/12 z-10">
            <div
              class="lg:max-w-6xl w-full rounded-3xl flex flex-col lg:flex-row bg-primary shadow-2xl"
            >
              <div class="lg:w-3/5 py-12 lg:py-8 px-8">
                <h3 class="text-white font-bold text-white text-xl">
                  BuyRealFollows Is Your Free Solution
                </h3>
                <p class="light-text font-light lg:text-xs mt-4 mb-0">
                  There are companies out there that can help relieve some of
                  the pressure of developing your Instagram presence, like us,
                  BuyRealFollows! In fact, we’re seriously helping our clients
                  by offering Instagram followers for free! That’s right–free!
                  With such a great deal you might be thinking, what’s the
                  catch?
                </p>
              </div>
              <div
                class="lg:w-2/5 pl-8 pb-8 lg:pb-0 lg:pl-0 flex relative lg:items-center lg:justify-center overflow-hidden box-border"
              >
                <a
                  href="#"
                  class="px-8 py-4 bg-white border border-primary text-primary rounded-full"
                  >Read More</a
                >
                <img
                  src="../assets/hexxxx.webp"
                  class="absolute bottom-0 right-0 h-16 hidden lg:block"
                />
                <img
                  src="../assets/semi-circle-top@2x.webp"
                  class="absolute top-0 left-0 h-16 hidden lg:block"
                />
              </div>
            </div>
          </div>
          <img
            src="../assets/grid_masked@2x.webp"
            class="hidden lg:block absolute bottom-0 left-0 w-24 grid-bottom-left"
          />
        </div>
      </div>

      <div class="relative mt-32 py-8">
        <img
          src="../assets/grid_masked@2x.webp"
          class="absolute bottom-0 right-0 w-24 grid-bottom-left"
        />
      </div>
      <div class="flex justify-center flex-col relative">
        <p
          class="text-center text-2xl lg:text-5xl font-medium mt-20 capitalize leading-tight"
        >
          Proudly Serving 500,000+<br />Instagram Users
        </p>
        <p class="text-lg font-regular text-center mt-6 mb-12">
          Check out BuyRealFollows user reviews and their experience.
        </p>
        <div class="lg:pl-24">
          <div class="carousel">
            <div
              class="testimonials flex inner items-end"
              ref="inner"
              :style="innerStyles"
            >
              <div
                v-for="(testimonial, idx) in testimonials"
                class="p-8 min-w-700 overflow-hidden"
              >
                <div class="m-0 text-sm whitespace-pre-wrap">
                  {{ testimonial.text }}
                </div>
                <div class="flex my-4">
                  <img
                    :src="testimonial.profile"
                    class="h-12 w-12 mr-4 rounded-full"
                  />
                  <div>
                    <h3 class="font-medium">{{ testimonial.name }}</h3>
                    <p class="text-xs mb-0">{{ testimonial.product }}</p>
                    <div class="flex mt-4">
                      <img
                        src="../assets/star.svg"
                        v-for="x in Math.floor(testimonial.rating)"
                        :key="x"
                        class="h-4 mr-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex ml-8 my-8 lg:ml-24 items-center">
          <span class="text-primary text-xl"
            >{{ currentSlide }} / {{ testimonials.length }}</span
          >
          <svg-icon
            name="left"
            @click="prev"
            class="ml-2 prev cursor-pointer w-8 h-8 lg:w-6 lg:h-6 inline"
          />
          <svg-icon
            name="right"
            @click="next"
            class="next cursor-pointer w-8 h-8 lg:w-6 lg:h-6 ml-4 inline"
          />
        </div>
      </div>
      <div class="flex justify-center flex-col relative">
        <img
          src="../assets/half_hex_left.svg"
          class="absolute top-0 translateY30p left-0 w-12 lg:w-26"
        />
        <p
          class="text-center text-2xl lg:text-5xl font-medium mt-20 mx-8 lg:mx-0 capitalize lg:leading-tight"
        >
          Simple Steps to Get<br />Free Instagram followers and likes
        </p>
        <p class="text-lg font-regular text-center mt-6 mb-20 px-8 lg:px-0">
          It is simple to get targeted, high quality, free Instagram followers
          from our network!<br />The process takes only 2 minutes to activate a
          plan and here are the steps
        </p>
        <div class="relative">
          <img
            src="../assets/grid_sq_right@2x.webp"
            class="hidden lg:block absolute top-0 right-0 w-24 grid-top-left"
          />
          <div
            class="container mx-auto lg:max-w-6xl flex flex-col lg:flex-row relative"
          >
            <div class="flex-1">
              <div
                class="bg-card py-16 mx-8 lg:mx-2 rounded-xl flex flex-col justify-center items-center"
              >
                <img src="../assets/step1.svg" class="w-20 lg:w-12" />
                <h3 class="font-bold mt-8 text-xl">Step 1</h3>
              </div>
              <h3
                class="capitalize font-medium lg:font-regular text-center mt-4 mb-8 lg:mb-0"
              >
                Register & login
              </h3>
            </div>
            <div class="flex-1">
              <div
                class="bg-card py-16 mx-8 lg:mx-2 rounded-xl flex flex-col justify-center items-center"
              >
                <img src="../assets/step2.svg" class="w-24 lg:w-16" />
                <h3 class="font-bold mt-8 text-xl">Step 2</h3>
              </div>
              <h3
                class="capitalize font-medium lg:font-regular text-center mt-4 mb-8 lg:mb-0"
              >
                Activate the free<br />plan
              </h3>
            </div>
            <div class="flex-1">
              <div
                class="bg-card py-16 mx-8 lg:mx-2 rounded-xl flex flex-col justify-center items-center"
              >
                <img src="../assets/step3.svg" class="w-24 lg:w-16" />
                <h3 class="font-bold mt-8 text-xl">Step 3</h3>
              </div>
              <h3
                class="capitalize font-medium lg:font-regular text-center mt-4 mb-8 lg:mb-0"
              >
                Follow Profiles of Interest
              </h3>
            </div>
            <div class="flex-1">
              <div
                class="bg-card py-16 mx-8 lg:mx-2 rounded-xl flex flex-col justify-center items-center"
              >
                <img src="../assets/step4.svg" class="w-16" />
                <h3 class="font-bold mt-6 text-xl">Step 4</h3>
              </div>
              <h3
                class="capitalize font-medium lg:font-regular text-center mt-4 mb-8 lg:mb-0"
              >
                2 Minutes Later,<br />You’re Done
              </h3>
            </div>
            <div class="flex-1">
              <div
                class="bg-card py-16 mx-8 lg:mx-2 rounded-xl flex flex-col justify-center items-center"
              >
                <img src="../assets/step5.svg" class="w-16" />
                <h3 class="font-bold mt-8 text-xl">Step 5</h3>
              </div>
              <h3
                class="capitalize font-medium lg:font-regular text-center mt-4 mb-8 lg:mb-0"
              >
                Get Free Fans!
              </h3>
            </div>
          </div>
        </div>
        <div v-if="!$auth.user" class="flex justify-center my-16">
          <a
            href="/register"
            class="px-12 py-4 bg-primary text-white rounded-full text-sm"
            >Register your free account now</a
          >
        </div>
        <div v-else class="flex justify-center my-16">
          <a
            href="/dashboard"
            class="px-12 py-4 bg-primary text-white rounded-full text-sm"
            >Go to dashboard</a
          >
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="content-top-bg-next"></div>
      <div id="faq" class="bg-primary relative pb-24">
        <div class="flex justify-center flex-col items-center">
          <img
            src="../assets/semi-circle.svg"
            class="hidden lg:block absolute top-0 left-0 w-26 translateY50p"
          />
          <h3 class="text-white text-center text-3xl my-4 font-medium">
            Frequently Asked Questions
          </h3>
          <p class="text-white text-center text-sm font-light px-8 lg:px-0">
            Here are answers to our most commonly asked questions. If you cannot
            find an answer here, send us an email/contact us:
          </p>
          <ul
            class="list-none lg:container lg:max-w-5xl ml-0 mt-16 px-8 lg:px-0"
          >
            <li
              class="lg:border-t-light pt-4 cursor-pointer"
              v-for="(faqItem, indx) in faqs"
            >
              <div
                class="accordion flex justify-between items-start"
                :class="faqItem.active ? 'active' : ''"
              >
                <p class="text-white font-medium">{{ faqItem.question }}</p>
                <img
                  src="../assets/arrow_down.svg"
                  class="cursor-pointer h-8"
                />
              </div>
              <div
                class="panel text-white font-light text-sm"
                :style="faqItem.active ? 'max-height: fit-content' : ''"
              >
                <p class="light-text">{{ faqItem.answer }}</p>
              </div>
            </li>
          </ul>
        </div>
        <img
          src="../assets/half_hex.svg"
          class="absolute bottom-0 right-0 w-26 lg:abs-middle"
        />
      </div>
      <div class="hidden flex justify-center flex-col relative">
        <h3
          class="text-center text-2xl lg:text-5xl font-medium mt-20 capitalize leading-tight"
        >
          Need more?
        </h3>
        <p class="text-sm font-regular text-center mt-6 mb-4 px-4 lg:px-0">
          You can arrange your own package with as many likes as you need. The
          bigger package<br class="hidden lg:block" />
          select, the more discount you’ll get.
        </p>
      </div>
      <div class="hidden relative mt-12 lg:mb-32 flex justify-center">
        <div class="w-11/12 lg:w-8/12 z-10">
          <!--<slider :extraClass="true"/>-->
        </div>
        <img
          src="../assets/grid_masked@2x.webp"
          class="hidden lg:block absolute bottom-0 left-0 w-24 grid-bottom-left-abs"
        />
      </div>
      <div class="bg-dim py-16">
        <div class="container mx-auto px-8 lg:px-0 lg:max-w-6xl relative">
          <!--            <h2 class="text-3xl lg:text-5xl font-medium capitalize leading-tight mb-6">Services</h2>-->
          <!--            <h3 class="font-medium text-sm m-0">Facebook</h3>-->
          <!--            <p></p>-->
          <!--            <h3 class="font-medium text-sm m-0">Instagram</h3>-->
          <!--            <p></p>-->
          <!--            <h3 class="font-medium text-sm m-0">Youtube</h3>-->
          <!--            <p></p>-->

          <div class="footer py-16 flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2">
              <p class="font-extrabold text-3xl lg:text-5xl mb-4">
                BuyReal<span class="text-primary">Follows.</span>
              </p>
              <p class="m-0 text-sm leading-loose">
                There are companies out there that can help relieve some of the
                pressure of<br class="hidden lg:block" />developing your
                Instagram presence, like us, Buyrealfollows! In fact, we’re
                seriously<br class="hidden lg:block" />helping our clients by
                offering Instagram followers for free! That’s right–free!<br
                  class="hidden lg:block"
                />With such a great deal you might be thinking, what’s the
                catch?
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
                  <a class="folnt-light text-sm" href="/register">Signup</a>
                </li>
                <!--                  <li class="my-2">-->
                <!--                    <a class="font-light text-sm" href="">Affiliates</a>-->
                <!--                  </li>-->
                <!--                  <li class="my-2">-->
                <!--                    <a class="font-light text-sm" target="_blank" href="mailto:support@buyrealfollows.com">Support Email</a>-->
                <!--                  </li>-->
              </ul>
              <ul class="hidden lg:block list-none m-0">
                <li>
                  <h3 class="font-medium mb-4">BuyRealFollows</h3>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/about">About us</a>
                </li>
                <!--                <li class="my-2">-->
                <!--                  <a class="font-light text-sm" href="/privacy">Privacy Policy</a>-->
                <!--                </li>-->
                <li class="my-2">
                  <a class="font-light text-sm" href="/terms"
                    >Terms and conditions</a
                  >
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/blog">Blog</a>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/sitemap">Sitemap</a>
                </li>
                <li class="my-2">
                  <a class="font-light text-sm" href="/robots.txt"
                    >Robots.txt</a
                  >
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
              <!--              <li class="my-2">-->
              <!--                <a class="font-light text-sm" href="/privacy">Privacy Policy</a>-->
              <!--              </li>-->
              <li class="my-2">
                <a class="font-light text-sm" href="/terms"
                  >Terms and conditions</a
                >
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/blog">Blog</a>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/sitemap">Sitemap</a>
              </li>
              <li class="my-2">
                <a class="font-light text-sm" href="/robots.txt">Robots.txt</a>
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
  </div>
</template>

<script>
import Menu from '../components/Menu'
import ameen from '../assets/0.webp'
import rohit from '../assets/1.webp'
import alexis from '../assets/2.webp'
import xingiho from '../assets/3.webp'
import zareen from '../assets/4.webp'
import DropdownHeader from '../components/DropdownHeader'
import DrawerMenu from '@/components/DrawerMenu'

export default {
  components: {
    DrawerMenu,
    DropdownHeader,
    Menu,
  },
  data: () => ({
    currentSlide: 1,
    menuMob: false,
    innerStyles: {},
    step: '',
    transitioning: false,
    faqs: [],
    pricing: [],
    services: [],
    platforms: [],
    testimonials: [
      {
        text: 'I got 2000 followers in less than a week. This is very good service compares to other competitors in the market.',
        name: 'Ameen',
        profile: ameen,
        product: 'Bought Instagram Followers',
        rating: 5,
      },
      {
        text: 'All my followers came almost instantly. Better than any other follower gaining site for sure! I never had any problems with it! Definitely recommend to anyone on instagram.',
        name: 'Rohit',
        profile: rohit,
        product: 'Bought Instagram Followers',
        rating: 4.5,
      },
      {
        text: "Does exactly what it says guaranteed 100%. So happy with this website I'm earning 100 followers daily!",
        name: 'Alexis',
        profile: alexis,
        product: 'Bought Instagram Followers',
        rating: 5,
      },
      {
        text: 'I sell organic products to people from on Instagram. In order to become popular on Instagram you need to share photos and spend time. The more you care, the harder it can be to access more people. To be able to sell more of my products, my photos need to be much more visible on Instagram (For ex: Instagram Explore Page). The only way to do this is to get more interactivity from my photos, but it was very difficult for me to do this myself. So I bought the product through Buyrealfollows.com . For now, you can be sure that more people see my photos. Thank you for this beautiful service and for asking my opinions.',
        name: 'Xingi Ho',
        profile: xingiho,
        product: 'Bought Instagram Likes',
        rating: 4,
      },
      {
        text: 'BuyRealFollows enables our growth team to test multiple hypotheses within a short period of time.',
        name: 'Zareen',
        profile: zareen,
        product: 'Bought Free Instagram Followers',
        rating: 5,
      },
    ],
  }),
  computed: {
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
  },
  async asyncData({ $axios, req }) {
    const resp = await $axios.get('platform-list/')
    if (resp && !resp.isAxiosError) {
      return {
        host: req?.headers.host,
        platforms: resp.data && resp.data.results,
        faqs: resp.data && resp.data.results[0].services[0].faqs,
      }
    }
  },
  head() {
    return {
      title:
        'Buy Instagram Followers, Twitter Followers and YouTube Subscribers - Buy Real Follows',
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
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
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
            'Buy Instagram Followers, Twitter Followers and YouTube Subscribers - Buy Real Follows',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Buy real follows provide cheapest instagram followers, instagram likes, youtube likes, youtube subscribers, facebook likes and more. Check our cheapest service with the best rates in the market. Services start instantly and 24 Hrs customer supports.',
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: `https://${this.host}/banner.webp`,
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
          content: 'Buy Real Follows',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: this.host.includes('www')
            ? `https://${this.host}`
            : `https://www.${this.host}`,
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
            mainEntity: this.faqJSONLD,
          },
        },
      ], //G-0395XL210H
    }
  },
  methods: {
    closeMenu() {
      this.menuMob = false
    },
    openFaq() {
      var acc = document.getElementsByClassName('accordion')
      var i

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
          this.classList.toggle('active')
          var panel = this.nextElementSibling
          var arrow = this.getElementsByTagName('img')[0]
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null

            if (arrow.classList.contains('open')) {
              // Check for class
              arrow.classList.toggle('close')
            } else {
              arrow.classList.toggle('open')
            }
          } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
            if (arrow.classList.contains('open')) {
              // Check for class
              arrow.classList.toggle('close')
            } else {
              arrow.classList.toggle('open')
            }
          }
        })
      }
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.testimonials.length
      this.step = `${innerWidth / totalCards}px`
    },
    next() {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.testimonials.shift()
        this.testimonials.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev() {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.testimonials.pop()
        this.testimonials.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      }
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      }
    },
    afterTransition(callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`,
      }
    },
  },
  mounted() {
    this.openFaq()
    this.setStep()
    this.resetTranslate()
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

body {
  overflow-x: hidden;
}

#__nuxt {
  width: 100vw;
  overflow-x: hidden;
}

@media (min-width: 900px) {
  .testimonials .slick-current {
    box-shadow: 0 25px 50px -12px rgba(83, 71, 227, 0.12);
    border-radius: 30px;
    border-width: 0.1px;
    border-color: #e2e0ff;
  }
}

.testimonials .slick-list {
  overflow: visible;
}

.pricing-inner {
  width: 450px;
}

.bg-light-x {
  background-color: #6d63e7;
}

ul#primary-menu li {
  margin-left: 16px;
  margin-right: 16px;
  color: #40455f;
}

.menu-item-31 {
  padding: 10px;
  padding-left: 36px;
  padding-right: 36px;
  background-color: #ffffff;
  border-radius: 24px;
  color: #5347e3 !important;
  border: 1px solid #5347e3;
}

.register-btn {
  padding: 10px;
  padding-left: 36px;
  padding-right: 36px;
  background-color: #5347e3;
  border-radius: 24px;
  color: #ffffff;
  border: 1px solid #5347e3;
}

ul,
ol {
  margin: 0 0 1.5em 3em;
}

/*.dropdown-content:after {*/
/*  content: '';*/
/*  position: absolute;*/
/*  background: url(../assets/sprite/svg/arrow_rounded.png);*/
/*  background-repeat: no-repeat;*/
/*  background-size: contain;*/
/*  height: 80px;*/
/*  width: 100px;*/
/*  top: 0;*/
/*  left: 50%;*/
/*  transform: translateY(-50%);*/
/*  z-index: 9;*/
/*}*/

/*.slick-slide {*/
/*  width: 430px !important;*/
/*}*/

.slick-track {
  display: flex;
  align-items: center;
}

.carousel {
  width: 100vw;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
</style>
