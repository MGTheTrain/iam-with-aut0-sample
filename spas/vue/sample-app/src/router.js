// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import PageNotFound from './components/PageNotFound.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/not-found', component: PageNotFound },
  { path: '/:pathMatch(.*)*', redirect: '/not-found' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;