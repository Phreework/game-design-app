import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ExcelTool from '../views/ExcelTool.vue';
import Todo from '../views/Todo.vue';
import ColorExchange from '../views/ColorExchange.vue';

Vue.use(VueRouter);
// {
//   icon: "mdi-home",
//   text: "首页",
//   route: "/home",
//   isSelect: true,
//   parent: null,
// },
export const routeMap = new Map([
  ["Home", {
    icon: "mdi-home",
    text: "首页",
    route: "/home",
    parent: null,
  }],
  ["Tools", {
    icon: "mdi-tools",
    text: "实用工具",
    route: "/tools",
    parent: "Home",
  }],
  ["Todo", {
    icon: "mdi-clipboard-list",
    text: "敏捷待办",
    route: "/todo",
    parent: "Home",
  }],
  ["Notes", {
    icon: "mdi-note",
    text: "神奇便签",
    route: "/notes",
    parent: "Home",
  }],
  ["Books", {
    icon: "mdi-book-open",
    text: "独游手册",
    route: "/books",
    parent: "Home",
  }],
  ["About", {
    icon: "mdi-qrcode",
    text: "联系反馈",
    route: "/about",
    parent: "Home",
  }],

]);
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
export let preRouters = [];
router.beforeEach((to, from, next) => {
  if (!to) return;
  preRouters = [];
  let temp;
  for (let item of routeMap.values()) {
    if (to.path == item.route) {
      temp = item;
    }
  }
  if (!temp) return;
  preRouters.push(temp);
  while (temp.parent) {
    temp = routeMap.get(temp.parent);
    preRouters.push(temp);
  }
  preRouters.reverse()
  console.log(preRouters);

  next()
})
export default router;
