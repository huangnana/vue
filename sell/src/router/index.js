import Vue from 'vue'
// import App from '../App'
import Router from 'vue-router'
import header from '@/components/header/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: header
    }
  ]
})
