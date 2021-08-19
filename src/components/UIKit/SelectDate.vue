<template>
  <div @change="changeOptionsShow" class="select">
    <input min="1"  :value="chosenValue" :data-type="'selectInput' + uniqueKey" class="select__input" :id=uniqueKey type="checkbox">
    <label :class="['select__label', !isValid && 'invalid__label', chosenValue && 'isValid__label']" :for=uniqueKey >
      {{chosenValue || title}}
      <svg class="select__arrow" width="13" height="5" viewBox="0 0 13 5" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 5L12.9952 0.5H0.00480938L6.5 5Z" fill="#202024"/>
      </svg>
      <div v-show="optionsShow" class="select__option-container">
        <template v-for="(year, i) in arrData">
          <input :name="name + uniqueKey" :value="year" type="radio" :id="'option__' + uniqueKey + i"
                 :key="randomKey('option-input')">
          <label class="select__option-label" :for="'option__' + uniqueKey + i" :key="randomKey('option-label')">{{year}}</label>
        </template>
      </div>
    </label>
  </div>

</template>

<script>
  import MixinRandomKey from "@/components/mixins/MixinRandomKey";

  export default {
    mixins: [MixinRandomKey],
    props: {
      uniqueKey: String,
      arrData: Array,
      title: String,
      name: String,
      isValid: Boolean
    },
    data: function () {
      return {
        chosenValue: null,
        optionsShow: false
      }
    },
    methods: {
      changeOptionsShow(e) {
        const selectInput = document.querySelector(`[data-type="selectInput${this.uniqueKey}"]`)
        if (selectInput === e.target) {
          this.optionsShow = e.target.checked
        } else {
          this.chosenValue = e.target.value
          selectInput.checked = this.optionsShow = false
          this.$emit('emitSelectData', {
            name: this.name,
            value: this.chosenValue
          })
        }
      },

    },
    mounted() {
      console.log(this.isValid)
    }
  }
</script>

<style scoped lang="scss">
  input {
    display: none;
  }

  .select__label {
    cursor: pointer;
    display: flex;
    width: 180px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: linear-gradient(90deg, rgba(228, 228, 228, 0.9) -6.2%, rgba(203, 203, 203, 0.9) 100%);
    position: relative;
    margin: 0 0 20px 0;
  }

  .select__arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .select__input:checked + .select__label .select__arrow {
    transform: rotateZ(180deg) translateY(50%);
  }

  .select__option-container {
    position: absolute;
    top: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 200px;
    z-index: 1;
    background: white;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(228, 228, 228, 0.9) transparent;
  }

  .select__option-container::-webkit-scrollbar {
    width: 6px;
  }

  .select__option-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .select__option-container::-webkit-scrollbar-thumb {
    background-color: rgba(228, 228, 228, 0.9);
    border-radius: 20px;
  }

  .select__option-label {
    min-height: 40px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .select__option-label:hover {
    transform: scale(1.1);
  }
  .invalid__label{
    border: 1px solid #EE5353;
    height: 38px;
    width: 178px;
  }

  .isValid__label{
    border: none;
  }
</style>
