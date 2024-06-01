<template>
  <div>
    <label>first name</label>
    <input type="text" v-model="inputValue">
  </div>
  <div>{{ inputValue }}</div>
</template>

<script>

export default {
  name: 'App',
  // mounted () {
  //   document.querySelector('input').value = this.inputValue
  // },
  data () {
    return {
      inputValue: 'Karel'
    }
  },
  // methods: {
  //   onInput(e) {

  //     this.inputValue = e.target.value
  //   }
  // }
}

</script>