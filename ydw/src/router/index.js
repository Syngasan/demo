import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Classification from '@/components/Classification';
import PerCenter from '@/components/PerCenter';
import ShopCar from '@/components/ShopCar';
import ProDel from '@/components/Prodel';
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/percenter',
      name: 'PerCenter',
      component: PerCenter
    },
    {
      path: '/classification',
      name: 'Classification',
      component: Classification
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/prodel/:id',
      name: 'ProDel',
      component: ProDel
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
