import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ExcelTool from '../views/ExcelTool.vue';
import Todo from '../views/Todo.vue';
import ColorExchange from '../views/ColorExchange.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/exceltool',
    name: 'ExcelTool',
    component: ExcelTool,
  },
  {
    path: '/colorExchange',
    name: 'ColorExchange',
    component: ColorExchange,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
