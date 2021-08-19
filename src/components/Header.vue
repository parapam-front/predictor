<template>
  <header class="header" :class="!main && 'header-question_height-change'">
    <h1 class="header__title" v-if="main"> Лучшие астрологи и экстрасенсы Румынии </h1>
    <p v-if="questionDescription" class="header__question-description">{{questionDescription}}</p>
    <transition name="fade-in">
      <p class="header__popup" v-if="popup">
        {{questionData[oldCounter]}}
      </p>
    </transition>
    <span v-if="!result" class="header__line">
            <img class="header__image" :src="'/images/eyeFull.svg'" alt="eye image">
    </span>
    <p class="header__subtitle" v-if="main"> Точность прогноза: 97% </p>

  </header>
</template>

<script>
  export default {
    props: {
      yearsOld: Number,
      questionData: Array,
      questionDescription: String,
      main: Boolean,
      popup: Boolean,
      result: Boolean
    },
    computed: {
      oldCounter() {
        if (18 <= this.yearsOld && this.yearsOld <= 35) {
          return 0
        } else if (36 <= this.yearsOld && this.yearsOld <= 45) {
          return 1
        }
        else if (46 <= this.yearsOld) {
          return 2
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    font-family: "Roboto Light", Arial, serif;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.6);

    .header__title {
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      letter-spacing: 0.1em;
      margin: 14px 0 11px;
    }

    .header__question-description {
      font-family: "Bad Script Regular", Arial, serif;
      width: 235px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 20px;
      text-align: center;
      height: 124px;
    }

    .header__line {
      width: 100vw;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      position: relative;
    }


    .header__subtitle {
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.1em;
    }

    .header__popup {
      font-family: "Bad Script Regular", Arial, serif;
      width: 236px;
      text-align: center;
      height: 84px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: #FFFFFF;
      position: relative;
      font-size: 14px;
      padding: 0 12px;
      line-height: 20px;
      color: #202024;
      margin: 24px 0 16px 0;
      opacity: 1;
    }

    .header__popup::after {
      content: '';
      border: 10px solid transparent;
      border-top: 18px solid #FFFFFF;
      position: absolute;
      top: calc(100% - 7px);
      right: 16px;
    }

    .header__image {
      width: 92px;
      position: absolute;
      bottom: 0;
      right: -28px;
    }
    .fade-in-enter-active,
    .fade-in-leave-active {
      transition: opacity 1.5s ease;
    }

    .fade-in-enter,
    {
      opacity: 0;
    }
  }
  .header-question_height-change{
    min-height: 124px;
    justify-content: flex-end;
  }

</style>
