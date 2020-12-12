import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import Routes from './routers'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
