import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

import { required, email } from 'vuelidate/lib/validators'

export const validationMixin = {
  validations: {
    name: { required },
    email: { required, email },
    // password: { required, minLength: 8 }
  }
}