<template>
  <div class="w-full rounded-xl mb-2 mt-16 flex bg-white border border-light_thin" :class="extraClass?'max-w-6xl':''">
    <div class="w-4/5 px-8 py-8 flex items-center" :class="extraClass?'px-8 py-12 ':''">
      <h3 class="font-medium text-lg mr-4">Free</h3>
      <div id="sliderr"></div>
    </div>
    <div class="w-1/5 pr-4 flex relative items-center justify-center overflow-hidden box-border">
      <a href="#" class="bg-primary font-medium  text-xs tracking-wide text-white rounded-full" :class="extraClass?'px-10 py-4 ':'px-4 py-2 '">Get for
        free</a>
    </div>
  </div>
</template>

<script>
  import {gsap} from "gsap";

  export default {
    name: "sliderlarge",
    props: ['extraClass'],
    methods: {
      initSlider() {
        let slider = document.getElementById('sliderr'),
          balloon,
          balloonTransform,
          balloonReset;

        noUiSlider.create(slider, {
          start: 10,
          connect: 'lower',
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
          balloon.childNodes[0].dataset.value = Math.round(this.get() * 100);
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

<style>
  #sliderr {
    --active: #FF5252;
    --balloon: var(--active);
    --value: #fff;
    --line: #E2E0FF;
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    height: 10px;
    border-radius: 30px;
    background: var(--line);
    position: relative;
    outline: none;
    border: none;
  }
  #sliderr .noUi-connects .noUi-connect {
    background: var(--active);
  }
  #sliderr .noUi-handle:before, #sliderr .noUi-handle:after {
    border-radius: 20px;
    -webkit-transform: scale(var(--s));
    transform: scale(var(--s));
    -webkit-transition: border-radius .3s ease, -webkit-transform .3s ease;
    transition: border-radius .3s ease, -webkit-transform .3s ease;
    transition: transform .3s ease, border-radius .3s ease;
    transition: transform .3s ease, border-radius .3s ease, -webkit-transform .3s ease;
  }
  #sliderr .noUi-handle:before {
    --s: .5;
    background: var(--active);
  }
  #sliderr .noUi-handle:after {
    --s: .2;
    background: #FF5252;
  }
  #sliderr .noUi-handle.noUi-active:before {
    --s: 0.5;
  }
  #sliderr .noUi-handle.noUi-active:after {
    --s: 0.5;
  }
  #sliderr .balloon {
    --o: 0;
    --s: 0;
    --y: 0;
    /*--o: 1;*/
    /*--s: 1;*/
    /*--y: -35px;*/
    --r: 0deg;
    width: 52px;
    height: 68px;
    pointer-events: none;
    position: absolute;
    z-index: 5;
    left: -58px;
    bottom: 0;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  #sliderr .balloon > div {
    width: 125px;
    height: 68px;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: var(--o);
    -webkit-transform: scale(var(--s)) translate(0, var(--y)) rotate(var(--r));
    transform: scale(var(--s)) translate(0, var(--y)) rotate(var(--r));
    -webkit-transition: opacity .4s ease, -webkit-transform .4s ease;
    transition: opacity .4s ease, -webkit-transform .4s ease;
    transition: transform .4s ease, opacity .4s ease;
    transition: transform .4s ease, opacity .4s ease, -webkit-transform .4s ease;
  }
  #sliderr .balloon > div:before, #sliderr .balloon > div:after {
    content: '';
    display: block;
  }
  #sliderr .balloon > div:before {
    height: 75px;
    background: url(../assets/tag_new.svg) no-repeat;
    background-size: contain;
  }
  #sliderr .balloon > div:after {
    content: attr(data-value);
    font-family: 'Geomanist', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--value);
    position: absolute;
    right: 35px;
    top: 18px;
    line-height: 24px;
    text-align: start;
  }
  #sliderr .balloon > div svg {
    display: block;
    width: 8px;
    height: 6px;
    fill: var(--balloon);
    position: absolute;
    left: 22px;
    bottom: 0;
  }
  #sliderr .balloon.active {
    --o: 1;
    --s: 1;
    --y: -35px;
  }
  #sliderr * {
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  #sliderr.noUi-state-tap .noUi-connect, #sliderr.noUi-state-tap .noUi-origin {
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
  }
  #sliderr .noUi-target {
    position: relative;
  }
  #sliderr .noUi-base,
  #sliderr .noUi-connects {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  #sliderr .noUi-origin,
  #sliderr .noUi-connect {
    position: absolute;
    will-change: transform;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    top: 0;
    left: 0;
    z-index: 1;
  }
  #sliderr .noUi-connects {
    overflow: hidden;
    z-index: 0;
    border-radius: 20px;
  }
  #sliderr .noUi-connects .noUi-connect {
    width: 100%;
    height: 100%;
  }
  #sliderr .noUi-handle {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    outline: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    top: -16px;
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: none !important;
  }
  #sliderr .noUi-handle:before, #sliderr .noUi-handle:after {
    content: '';
    position: absolute;
  }
  #sliderr .noUi-handle:before {
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
  }
  #sliderr .noUi-handle:after {
    left: 2px;
    top: 2px;
    width: 36px;
    height: 36px;
  }
  #sliderr .noUi-origin {
    left: auto;
    right: 0;
    height: 0;
    width: 10%;
  }
</style>
