import Vue from 'vue'
import Vuex from 'vuex'
import card from './modules/card'

Vue.use(Vuex);

// export default new Vuex.Store({
// 	modules: {
// 		card
// 	}
// });

const store = () => {
	return new Vuex.Store({
	// ваша конфигурация хранилища Vuex здесь
		modules: {
			card
		}
	})
  }
  
  export default store