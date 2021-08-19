<template>
  <form class="question__container">
    <h3 class="question__title uppercase">{{questionData.question}}</h3>
    <SelectDate
      :uniqueKey="randomKey('select')"
      :arrData="arrFilteredDays || arrDays"
      :title="'День'"
      :name="'day'"
      :isValid="this.birthDay.day.isValid"
      @emitSelectData="selectData"
    ></SelectDate>
    <SelectDate
      :uniqueKey="randomKey('select')"
      :arrData="arrMonths"
      :title="'Месяц'"
      :name="'month'"
      :isValid="this.birthDay.month.isValid"
      @emitSelectData="selectData"
    ></SelectDate>
    <SelectDate
      :uniqueKey="randomKey('select')"
      :arrData="arrYears"
      :title="'Год'"
      :name="'year'"
      :isValid="this.birthDay.year.isValid"
      @emitSelectData="selectData"
    ></SelectDate>


    <Button type='button' :buttonType="'formSubmit'" :submitForm="checkForm" :linkName="questionNumber"
            :propsButtonText="'Далее'"></Button>
    <p class="question__number">
      Вопрос {{questionNumber}}-5
      <img class="question__image" :src="'/images/planetFull.svg'" alt="planet image" width="300px" height="200">
    </p>
  </form>
</template>

<script>
  import Button from '@UI/Button.vue'
  import SelectDate from '@UI/SelectDate.vue'
  import MixinRandomKey from "@/components/mixins/MixinRandomKey.js";
  import MixinYearsOldMethod from "@/components/mixins/MixinQuestionForm";


  export default {
    props: {
      questionData: Object,
      questionNumber: Number
    },
    mixins: [MixinRandomKey, MixinYearsOldMethod],
    data() {
      return {
        onlyOneSelectShow: null,
        arrYears: null,
        arrMonths: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        arrDays: null,
        arrFilteredDays: null,
        year: 2020,
        month: null,
        birthDay: {
          year: {
            value: null,
            isValid: true
          },
          month: {
            value: null,
            isValid: true
          },
          day: {
            value: null,
            isValid: true
          }
        }
      }
    },
    components: {
      Button,
      SelectDate
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">

</style>
