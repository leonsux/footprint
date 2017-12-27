import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AppBrowse from '@/components/browse/AppBrowse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppBrowse',
      component: AppBrowse
    }
  ]
})
