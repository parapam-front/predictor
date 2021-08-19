<template>
  <div class="wrapper">
    <Header
      :yearsOld="yearsOld"
      :question-description="questionDescription[name]"
      :result="result"
      :popup="popup"
      :question-data="questionData[name].popup || []"
    />
    <Form @emitDataForm="emitDataForm" :questionData="questionData[name]" :questionNumber="name" v-if="name === 3"></Form>
    <Question @emitPopupShow="popupShow" :questionData="questionData[name]" :questionNumber="name" v-if="name !== 3 && 7"></Question>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Form from '@UI/QuestionForm.vue'
  import Question from '@UI/Question.vue'
  // разобраться с 4 странице по пиксель пёрфект проверить на чистоту код вопросника и хедера
  export default {
    props: {
      yearsOld: Number
    },
    data() {
      return {
        name: null,
        mainPage: false,
        questionData: {
          2: {
            question: 'Когда Вы чувствуете себя наиболее комфортно?',
            answer: [
              'Утро', 'День', 'Вечер', 'Ночь'
            ],
          },
          3: {
            question: 'Укажите свою дату рождения:'
          },
          4: {
            question: 'Снятся ли Вам умершие люди?',
            answer: [
              'Да',
              'Нет',
              'Иногда'
            ]
          },
          5: {
            question: 'Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?',
            answer: [
              'Да',
              'Затрудняюсь ответить'
            ],
            popup: [
              'По вам скучает очень близкий человек, которого больше нет в мире живых.',
              'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.',
              'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.'
            ]
          }
        },
        questionDescription: {
          2: 'Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.',
          3: 'Уже совсем скоро Вы узнаете много интересного о своем будущем!',
          4: 'Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!',
          5: null,
          6: null
        },
        popup: null,
        result: false
      }
    },
    components: {
      Header,
      Question,
      Form
    },
    methods: {
      emitDataForm(data) {
        this.$emit('dataForm', data)
      },
      popupShow() {
        this.popup = true
      }
    },
    // разобраться с роутингом какая-то проблема при переходах
    created() {
      const pageNumber = Number(this.$router.currentRoute.name)
      this.name = pageNumber
      if (pageNumber === 7) {
        this.result = true
      }
      this.popup = pageNumber === 7
    },
    name: "QuestionPage"
  }
</script>

<style scoped>

</style>
