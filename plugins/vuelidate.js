import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'

Vue.use(Vuelidate)
Vue.use(VueTheMask)

import { required, email } from 'vuelidate/lib/validators'

export const validationMixin = {
  validations: {
    name: { required },
    phone: { required },
    // email: { required, email },
    // password: { required, minLength: 8 }
  }
}