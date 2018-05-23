// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'lib-flexible'
import {Button, Cell ,MessageBox} from 'mint-ui'

Vue.config.productionTip = false

//Vue.use(Button)
Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$MessageBox = MessageBox
Vue.prototype.$axios = axios
//Vue.ues(Cell)
//Vue.use(MessageBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
