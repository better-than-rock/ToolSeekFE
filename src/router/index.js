import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import MapView from '@/components/MapView';

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
  ],
});
