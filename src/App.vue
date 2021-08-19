<template>
  <div class="wrapper">
    <Preloader v-show="loader"></Preloader>
    <router-view v-show="!loader" :key="$route.path" :yearsOld="resultAnswer.third" @dataForm="addYearsOld"></router-view>
  </div>
</template>

<script>
  import Preloader from "./components/Preloader.vue"

  export default {
    data() {
      return {
        loader: false,
        resultAnswer: {
          first: null,
          second: null,
          third: null,
          fourth: null,
          fifth: null
        }
      }
    },
    components: {
      Preloader
    },
    methods: {
      addYearsOld(data) {
        this.resultAnswer.third = data.formData
        this.loader = data.loader
        setTimeout(() => {
          this.loader = false
        }, 2000)
      }
    },
    beforeCreate() {
    }
  }
</script>
