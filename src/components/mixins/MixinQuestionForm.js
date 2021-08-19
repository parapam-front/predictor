export default {
  mounted() {
    const date = new Date();
    this.month = date.getMonth()
    this.year = date.getFullYear()
    this.arrYears = [...Array(100)].map((item, i) => {
      return this.year - i
    })
    this.arrDays = [...Array(31)].map((item, i) => {
      return i + 1
    })
  },
  methods: {
    daysInMonth(month, year) {
      const monthNum = new Date(Date.parse(month + ' 1,' + year)).getMonth() + 1
      return new Date(year, monthNum, 0).getDate()
    },
    filterDayInMonth(arr, month, year) {
      arr.filter((item) => {
        return item <= this.daysInMonth(month, year)
      })
    },
    selectData(data) {
      this.birthDay[data.name].value = Number(data.value)

      if (this.birthDay.year.value && this.birthDay.month.value !== null) {
        this.arrFilteredDays = this.filterDayInMonth(this.arrDays, this.birthDay.month.value, this.birthDay.year.value
        )
      }
    },
    yearsOldCounter(day, month, year) {
      let yearsOld = null
      if (!!day && !!month && !!year) {
        const date = new Date()
        const realDay = date.getUTCDate()
        const realMonth = date.getMonth() + 1
        const realYear = date.getFullYear()

        if (realMonth > month) {
          yearsOld = realYear - year
        }
        if (realMonth < month) {
          yearsOld = realYear - (year + 1)
        }
        if (realMonth === month) {
          if (realDay < day) {
            yearsOld = realYear - (year + 1)
          } else {
            yearsOld = realYear - year
          }
        }
        return yearsOld
      }
      return yearsOld
    },
    checkForm() {
      if (!!this.birthDay.year.value && !!this.birthDay.month.value && !!this.birthDay.day.value === true) {
        setTimeout(() => {
          this.$router.push({name: `${this.questionNumber + 1}`})
        }, 2000)
        this.$emit('emitDataForm', {
          formData: this.yearsOldCounter(this.birthDay.day.value, this.birthDay.month.value, this.birthDay.year.value),
          loader: true
        })
      }
      if (!this.birthDay.year.value) {
        this.birthDay.year.isValid = false
      }
      if (!this.birthDay.month.value) {
        this.birthDay.month.isValid = false
      }
      if (!this.birthDay.day.value) {
        this.birthDay.day.isValid = false
      }
    }
  },

}
