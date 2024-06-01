export default {
  required (value) {
    return !!value
  },
  minLength (value, par) {
    return value.length >= par
  }
}