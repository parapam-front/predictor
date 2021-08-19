export default {
  methods: {
    randomKey(name, maxValue = 1000) {
      return `${name}${Math.random() * maxValue}`
    }
  }
}
