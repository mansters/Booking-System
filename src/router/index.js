import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ViewContainer from '@/components/ViewContainer/ViewContainer';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewContainer',
      component: ViewContainer
    }
  ]
})
