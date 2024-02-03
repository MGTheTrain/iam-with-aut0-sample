// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import PageNotFound from './components/PageNotFound.vue';
import { authGuard } from '@auth0/auth0-vue';
import AuthGuardedApiComponent from './components/AuthGuardedApiComponent.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/:pathMatch(.*)', component: PageNotFound },
  { path: '/auth-guarded-api', component: AuthGuardedApiComponent, beforeEnter: authGuard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;