<template>
  <div class="form-control">
    <label v-if="settings.label" :for="control">{{ settings.label }}</label>
    <input :id="control" type="text" :autocomplete="settings.autocomplete || 'off'"
      :placeholder="settings.placeholder || ''" :autofocus="settings.autofocus || false"
      :disabled="settings.disabled || false" :readonly="settings.readonly || false"
      :inputmode="settings.inputmode || 'text'" :value="value" @input="onInput"
      @blur="onBlur"
    >
    <transition name="fade">
      <div class="error-message" v-if="error">{{ errorMessage }}</div>
    </transition>

  </div>

</template>

<script>

export default {
  name: 'TInput',
  props: {
    control: String,
    settings: Object,
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: String
  },
  created () {
    this.value = this.settings.initialValue || ''
    this.$emit('inputed', this.value)
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onInput (e) {
      this.value = e.target.value
      this.$emit('inputed', this.value)
    },
    onBlur () {
      this.$emit('blured')
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../styles/transitions.styl'

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;
}

input {
  padding: .4em .8em;
  font-size: 1.1rem;
}

.error-message {
  color: red;
  font-style: italic;
  font-size: 0.9rem;
  position: absolute;
  top: 100%;
}

</style>