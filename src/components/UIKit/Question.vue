<template>
  <section class="question__container">
    <h3 class="question__title uppercase" :class="questionNumber === 5 && 'question__title_overWidth'">
      {{questionData.question}}</h3>
    <template v-for="item in questionData.answer">
      <Button @emitPopupShow="emitPopupShow" type='button' :linkName="questionNumber" :buttonType="checkButtonType(item)"
              :propsButtonText="item"></Button>
    </template>
    <p class="question__number">
      Вопрос {{questionNumber}}-5
      <img class="question__image" :src="'/images/planetFull.svg'" alt="planet image" width="300px" height="200">
    </p>

  </section>
</template>

<script>
  import Button from "@UI/Button.vue";
  import MixinButtonMethods from "@/components/mixins/MixinButtonMethods";

  export default {
    mixins: [MixinButtonMethods],
    props: {
      questionData: Object,
      questionNumber: Number,
    },
    methods: {
      emitPopupShow() {
        this.$emit('emitPopupShow', true)
      }
    },
    components: {
      Button
    },
    mounted() {
    }
  }
</script>
