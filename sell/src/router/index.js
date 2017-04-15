import Vue from 'vue';
// 第三方插件注册
import Router from 'vue-router';
import Resource from 'vue-resource';
// 组件注册
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';
import '../common/stylus/index.styl'

Vue.use(Router);
Vue.use(Resource);


export default new Router({
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ]
});
let router = new Router({
  linkActiveClass: 'active'
});
router.push('/goods');
