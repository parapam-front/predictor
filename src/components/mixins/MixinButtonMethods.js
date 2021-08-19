export default {
  methods: {
    checkButtonType(string) {
      if (string === 'Далее') {
        return 'formSubmit'
      } else if (string === 'Затрудняюсь ответить') {
        return 'popupActivator'
      } else {
        return 'dataLink'
      }
    },
  }
}
