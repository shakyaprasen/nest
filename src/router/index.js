import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../modules/home/Home.vue';
import Login from '../modules/login/Login.vue';
import Index from '../modules/Index.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  // {
  //   path: '/home/:id',
  //   name: 'home',
  //   component: Home,
  // },
  {
    path: '/',
    name: 'index',
    component: Index,
    children:[]
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/multiple',
    name: 'multiple-component',
    component: () => import(/* webpackChunkName: "multiple" */ '../modules/multipleComponents/Index.vue'),
    children: [
      {
        path: 'new',
        name: 'multiple-new',
        component: () => import(/* webpackChunkName: "multiple" */ '../modules/multipleComponents/components/New.vue'),
      },
      {
        path: 'old',
        name: 'multiple-old',
        component: () => import(/* webpackChunkName: "multiple" */ '../modules/multipleComponents/components/Old.vue'),
      },
      {
        path: '/',
        redirect: { name: 'multiple-old' },
      },
    ],
  },
  {
    path: '/tabbed',
    name: 'tabbed-elements',
    component: () => import(/* webpackChunkName: "multiple" */ '../modules/tabbedElements/Index.vue'),
  },
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '*',
    redirect: { name: 'home' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
