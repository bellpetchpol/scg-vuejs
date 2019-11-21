import '@babel/polyfill'
import 'mutationobserver-shim'
import './styles/my-style.scss'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueResizeText from 'vue-resize-text'


library.add(faSearch, faPhoneAlt, faEnvelope)

Vue.use(VueResizeText)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
