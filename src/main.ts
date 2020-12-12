import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'jquery'
import axios from 'axios';
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)


Vue.config.productionTip = false

// Vue.filter("snippet",function(value){

//   return value.slice(0,6);
// })
// Vue.filter("slice",function(value){

//   return Number(value).toFixed(4);
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
