import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import MapView from '@/components/MapView';
import Login from '@/components/LoginForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/show',
      name: 'MapView',
      component: MapView,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
