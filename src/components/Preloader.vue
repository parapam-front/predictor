<template>
  <div class="preloader">
    <div class="animation">
      <span class="animation__item" v-for="item in 12" :key="randomKey('loader-item')"/>
    </div>
    <h3 class="preloader__text">Loading</h3>
  </div>
</template>

<script>
  import MixinRandomKey from "@/components/mixins/MixinRandomKey";

  export default {
    mixins: [MixinRandomKey]
  }
</script>

<style lang="scss" scoped>

  .preloader {
    font-family: "Roboto Light", Arial, serif;
    position: fixed;
    top: 54%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

  }

  .animation {
    height: 74px;
    width: 74px;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .animation__item {
    width: 7px;
    height: calc(100% / 2);
    /*background: white;*/
    position: absolute;
    transform-origin: bottom center;
  }

  .animation__item::before {
    animation-name: loader;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    content: '';
    width: 100%;
    height: 14px;
    position: absolute;
    background: #AB780A;
    border-radius: 50%;
  }

  @for $i from 1 through 12 {
    .preloader span:nth-of-type(#{$i}) {
      transform: rotateZ(calc(30deg * #{$i}));
    }
    .preloader span:nth-of-type(#{$i})::before {
      animation-delay: calc(100ms * (#{$i} - 1));
    }
  }

  @keyframes loader {
    from {
      background: #AB780A;
    }
    25% {
      background: #D79C1E;
    }
    50% {
      background: #E6A43C;
    }
    75% {
      background: #FFE3A7;
    }
    to {
      background: #D7B671;
    }
  }

  .preloader__text {
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.1em;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin: 26px 0 0 0;
  }
</style>
