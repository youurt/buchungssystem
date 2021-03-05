import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/start',
    name: 'Start',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Start.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/User.vue'),
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Booking.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const adminloggedIn = store.state.adminStore.adminData.email;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !adminloggedIn) next('/');
  else next();
});

export default router;
