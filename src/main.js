import Vue from 'vue'
import App from './App.vue'

// Plugins
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.config.productionTip = false

Vue.use(Autocomplete)

new Vue({
  render: h => h(App),
}).$mount('#app')
