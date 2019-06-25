import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import tree from 'vue-jstree'

Vue.config.productionTip = false
Vue.use(BootstrapVue) 
Vue.use(tree) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
