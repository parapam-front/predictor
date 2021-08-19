<template>
  <button class="button" @click="buttonClick">
    {{propsButtonText}}
  </button>
</template>

<script>
  export default {
    props: {
      buttonType: String,
      value: Boolean,
      propsButtonText: String,
      linkName: Number,
      submitForm: Function
    },
    methods: {
      buttonClick() {
        // console.log(this.buttonType)
        switch (this.buttonType) {
          case 'formSubmit':
            this.submitForm()
            break
          case 'dataLink':
            this.linkName < 5 ?
              this.$router.push({name: this.linkName + 1})
              :
              this.$router.push({name: 'result'})
            break
      case
        'popupActivator'
      :
        this.$emit('emitPopupShow', true)
            break
      }
    }
  }
  ,
  created()
  {
  }
  }
</script>

<style scoped lang="scss">
  .button {
    width: 180px;
    height: 40px;
    text-align: center;
    vertical-align: center;
    border: none;
    border-radius: 50px;
    background: linear-gradient(90deg, rgba(246, 200, 102, 0.9) -6.2%, rgba(254, 173, 53, 0.9) 100%);
    position: relative;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 16px;
    margin: 0 0 20px;
  }

  .button::before {
    content: '';
  }

  .button::before {
    content: '';
    position: absolute;
    width: 88px;
    height: 40px;
    left: -3px;
    top: 0;
    background: linear-gradient(248.67deg, rgba(255, 255, 255, 0) 30.84%, rgba(255, 255, 255, 0.29) 46.06%, rgba(255, 255, 255, 0) 64.04%);
    animation: linear 1.5s linear infinite;
  }

  @keyframes linear {
    from {
      left: -3px;
    }
    to {
      left: calc(50% + 20px)
    }
  }
</style>
