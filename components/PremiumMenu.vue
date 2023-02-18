<template>
  <div id="premMenu" class="" @mouseleave="$emit('close')">
    <div class="absolute top-0 right-0 w-2/3 shadow-xl bg-white px-8 py-8 rounded-xl border border-light m-16 mt-20 z-20">
      <div class="w-full flex">
        <div class="w-1/3 flex flex-col justify-center">
          <div class="mb-6">
            <span class="font-medium text-primary text-sm bg-light-1 px-8 py-2 rounded-lg">Instagram Services</span>
          </div>
          <ul class="list-none m-0 p-0">
            <li>
              <a class="text-xs font-light" href="">Buy Hashtags Research & Profile Optimization</a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Followers
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Automatic Followers For Instagram
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Likes</a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Automatic Likes For Instagram
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Views

              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Comments
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Package Deal
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Free Instagram Followers
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy IGTV Likes
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy IGTV Views
              </a>
            </li>
          </ul>
        </div>
        <div class="w-1/3 flex flex-col justify-center">
          <div class="mb-6">
            <span class="font-medium text-youtube text-sm bg-youtube_bg px-8 py-2 rounded-lg">Youtube Services</span>
          </div>
          <ul class="list-none m-0 p-0">
            <li>
              <a class="text-xs font-light" href="">Buy Hashtags Research & Profile Optimization</a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Followers
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Automatic Followers For Instagram
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Likes</a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Automatic Likes For Instagram
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Views

              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Comments
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Package Deal
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Free Instagram Followers
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy IGTV Likes
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy IGTV Views
              </a>
            </li>
          </ul>
        </div>
        <div class="w-1/3 flex flex-col justify-center">
          <div class="mb-6">
            <span class="font-medium text-twitter text-sm bg-twitter_bg px-8 py-2 rounded-lg">Twitter Services</span>
          </div>
          <ul class="list-none m-0 p-0">
            <li>
              <a class="text-xs font-light" href="">Buy Hashtags Research & Profile Optimization</a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Followers
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Automatic Followers For Instagram
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Likes</a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Automatic Likes For Instagram
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Views

              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Comments
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy Instagram Package Deal
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Free Instagram Followers
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy IGTV Likes
              </a>
            </li>
            <li>
              <a class="text-xs font-light" href="">Buy IGTV Views
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--<SliderLarge :extraClass="true"/>-->
    </div>
  </div>
</template>

<script>
  import SliderLarge from '../components/SliderLarge'

  export default {
    components: {
      SliderLarge
    },
    name: "premium-menu"
  }
</script>

<style>

  #premMenu:after {
    content: '';
    position: absolute;
    background: url(../assets/sprite/svg/arrow_rounded.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
    width: 100px;
    top: 0;
    left: 50%;
    transform: translate(140%, 50%);
    z-index: 9;
  }

</style>
