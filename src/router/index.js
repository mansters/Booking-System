import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
import LocalStorage from '@/utils/LocalStorage';

import ViewContainer from '@/components/ViewContainer/ViewContainer';

import Home from '@/router/Home/Home';
import TravellersAre from '@/components/TravellersAre/TravellersAre'
import Exclusive from '@/components/newTicket/Exclusive'
import BookingTicket from '@/components/newTicket/BookingTicket'
import RobTickets from '@/components/RobTickets/RobTickets'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'ViewContainer',
      component: ViewContainer,
      children: [
        { path: '', name: 'Home', component: Home },
        {path:'/TravellersAre',name:'TravellersAre',component:TravellersAre},
        {path:'/Exclusive',name:'Exclusive',component:Exclusive},
        {path:'/BookingTicket',name:'BookingTicket',component:BookingTicket},
        {path:'/RobTickets',name:'RobTickets',component:RobTickets}
      ]
    }
  ]
})


/**
 * 全局路由钩子函数
 * 每次跳转前判定token是否存在，以及当前路由
 *
 * @date 218/7/6
 * @author Axiny
 */
router.beforeEach((to, from, next) => {

  const LocalStorageUser = LocalStorage.get('user');

  if (LocalStorageUser) {
    if (LocalStorageUser.loginUser) {
      store.state.User.loginUser = LocalStorageUser.loginUser;
    }

    // if (Object.keys(LocalStorageUser.userSet).length !== 0) {
    //   store.state.User.userSet = LocalStorageUser.userSet;
    // }
  }

  next();
});

export default router;
