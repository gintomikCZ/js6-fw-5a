<template>
  <TInput
    v-if="settings.type === 'text'"
    :control="control"
    :settings="settings"
    @inputed="onInputed"
    :error="error"
    :errorMessage="errorMessage"
    @blured="validate"
  />
</template>

<script>
import TInput from '@/components/TInput.vue'
import validator from '@/utils/validator.js'

export default {
  name: 'TControl',
  props: {
    settings: Object,
    control: String,
  },
  data () {
    return {
      value: '',
      error: false,
      errorMessage: 'lalala'
    }
  },
  methods: {
    onInputed(value) {
      this.value = value
      this.$emit('control-inputed', { control: this.control, value: this.value })
    },
    validate() {
      if (!this.settings.valRules) {
        return
      }
      let error = false
      this.settings.valRules.forEach((ruleObj) => {
        if(!error) {
          if (!validator[ruleObj.rule](this.value, ruleObj.par)) {
            error = true
            this.error = true
            this.errorMessage = ruleObj.message
          }
        }
      })
      if (!error) {
        this.error = false
        this.errorMessage = ''
      }
    }
  },
  components: { TInput }
}
</script>