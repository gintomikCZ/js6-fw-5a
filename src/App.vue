<template>
 <TForm :formSettings="formSettings" @submited="onSubmited"/>
</template>

<script>
import TForm from '@/components/TForm.vue'
export default {
  name: 'App',
  data () {
    return {
      formSettings: {
        firstname: {
          type: 'text',
          label: 'first name',
          valRules: [
            { rule: 'required', message: 'enter your first name' },
            { rule: 'minLength', par: 2, message: 'the name should contain at least 2 chars' }
          ]
        },
        lastname: {
          type: 'text',
          label: 'last name',
          valRules: [
            { rule: 'required', message: 'enter your last name' },
            { rule: 'minLength', par: 2, message: 'your name should contain at least 2 chars' },
            { rule: 'maxLength', par: 100, message: 'your last name should contain max 100 chars' }
          ]
        },
        age: {
          type: 'number',
          label: 'your age',
          valRules: [
            { rule: 'required', message: 'your age is required' },
            { rule: 'greaterThen', par: 17, message: 'your age has to be at least 18 years'},
            { rule: 'lessThen', par: 120, message: 'I don\'t believe you'}
          ]
        },
        comment: {
          type: 'textarea',
          label: 'leave your comment',
          placeholder: 'lalala',
          cols: 20,
          rows: 3,
          counter: true,
          limit: 50,
          valRules: [
            { rule: 'maxLength', par: 50, message: 'not more then 500 chars !' }
          ]
        }
      }
    }
  },
  methods: {
    onSubmited(data) {
      console.log('submited', data)
    }
  },
  components: { TForm }
}

</script>

<style scoped>

</style>