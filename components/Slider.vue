<template>
  <div>
    <div class="lg:max-w-6xl w-full rounded-lg lg:rounded-2xl flex bg-white border border-light_thin box-light">
      <div class="w-full lg:w-4/5 px-8 py-4 lg:py-12 flex items-center">
        <h3 class="font-medium text-lg mr-4">{{pricing}}</h3>
        <div id="slider"></div>
      </div>
      <div class="hidden w-1/5 pr-4 lg:flex relative items-center justify-center overflow-hidden box-border">
        <a href="#" class="bg-primary font-medium  text-xs tracking-wide text-white rounded-full"
           :class="extraClass?'px-10 py-4 ':'px-4 py-2 '">
          {{pricing_msg}}</a>
      </div>
    </div>
    <div class="w-full pr-4 my-4 flex lg:hidden relative items-center justify-center overflow-hidden box-border">
      <a href="/order/?p=1"
         class=" text-center w-8/12 px-10 py-2 bg-primary font-medium tracking-wide text-white rounded-full">Get for
        free</a>
    </div>
  </div>
</template>

<script>
  import {gsap} from "gsap";

  export default {
    name: "slider",
    props: ['extraClass'],
    data: () => ({
      pricing: 'Free',
      pricing_msg: 'Get for free',
    }),
    methods: {
      initSlider() {
        let slider = document.getElementById('slider'),
          balloon,
          balloonTransform,
          balloonReset;

        noUiSlider.create(slider, {
          start: 10,
          connect: 'lower',
          step: 20,
          range: {
            min: 0,
            max: 100
          }
        });

        if (!balloon) {

          let inner = document.createElement('div');

          balloon = document.createElement('div');
          balloon.classList.add('balloon');
          balloon.appendChild(inner);

          slider.getElementsByClassName('noUi-base')[0].appendChild(balloon);

          balloonTransform = new Proxy({
            r: 0
          }, {
            set(target, key, value) {
              target[key] = value;
              balloon.style.setProperty('--r', target.r + 'deg');
              return true;
            },
            get(target, key) {
              return target[key];
            }
          });

        }

        let timestamp = null,
          lastX = null,
          startedMoving = false,
          moved = false;

        slider.noUiSlider.on('start', function () {
          let percent = this.get() / this.options.range.max * 100;
          balloon.classList.add('active');
          balloon.childNodes[0].dataset.value = Math.round(this.get());
          gsap.to(balloon, 0, {
            x: this.target.offsetWidth * percent / 100,
            scale: .75 + .25 * percent / 100
          });
          balloonReset = setInterval(() => {
            if (!moved && startedMoving) {
              balloonTransform.r = 0;
              startedMoving = false;
            }
            moved = false;
          }, 20);
        });

        slider.noUiSlider.on('slide', function () {
          let percent = this.get() / this.options.range.max * 100;
          balloon.childNodes[0].dataset.value = Math.round(this.get());
          if (timestamp === null) {
            timestamp = Date.now();
            lastX = this.get();
            return;
          }
          var now = Date.now(),
            speedX = Math.round((this.get() - lastX) / (now - timestamp) * 160),
            speedX = speedX > 10 ? 10 : speedX < -10 ? -10 : speedX;

          balloonTransform.r = speedX * -2;

          startedMoving = true;
          moved = true;

          gsap.to(balloon, 1.4, {
            x: this.target.offsetWidth * percent / 100,
            scale: .75 + .25 * percent / 100,
            ease: Elastic.easeOut.config(1, .6)
          });

          timestamp = now;
          lastX = this.get();
        });

        slider.noUiSlider.on('end', function () {
          balloon.classList.remove('active');
          clearInterval(balloonReset);
        });
      }
    },
    mounted() {
      this.initSlider();
    }
  }
</script>

<style scoped>

</style>
