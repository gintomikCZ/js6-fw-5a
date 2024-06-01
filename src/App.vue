<template>
  <div class="form">

    <TControl
      v-for="control in Object.keys(formSettings)"
      :control="control"
      :settings="formSettings[control]"
      @control-inputed="onInputed"
    />
  </div>
  <h2>the name of the guy is:</h2>
  <div>{{ fullName }}</div>
</template>

<script>
import TControl from '@/components/TControl.vue'
export default {
  name: 'App',
  data () {
    return {
      formSettings: {
        firstname: {
          type: 'text',
          label: 'first name',
          initialValue: 'Karel',
          valRules: [
            { rule: 'required', message: 'enter your first name' },
            { rule: 'minLength', par: 2, message: 'the name should contain at least 2 chars' }
          ]
        },
        lastname: {
          type: 'text',
          label: 'last name',
          initialValue: 'Houska'
        }
      },
      formData: {
        firstname: '',
        lastname: ''
      }
    }
  },
  computed: {
    fullName() {
      // return this.formData.firstname + ' ' + this.formData.lastname
      return Object.values(this.formData).join(' ')
    }
  },
  methods: {
    onInputed(payload) { // { control: 'firstname', value: 'Karel' }
      this.formData[payload.control] = payload.value
    }
  },
  components: { TControl }
}

</script>

<style scoped>

.form {
  width: 300px;
}
</style>