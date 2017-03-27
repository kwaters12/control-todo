// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Resource from 'vue-resource'

import App from './App'
import router from './router'
import auth from './auth'

Vue.config.productionTip = false

Vue.use(Resource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    newTodo: '',
    user: {},
    loggedIn: false
  },
  created: function () {
    auth.checkAuth()
  }
})
