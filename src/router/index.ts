import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import RegulatoryOverview from '../components/RegulatoryOverview.vue';
import RegulatoryDetail from '../components/RegulatoryDetail.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/regulatories',
    name: 'Regulatories',
    component: RegulatoryOverview,
  },
  {
    path: '/regulatory/:id',
    name: 'Regulatory',
    component: RegulatoryDetail,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
