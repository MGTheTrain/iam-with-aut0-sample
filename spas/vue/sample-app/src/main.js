import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import router from './router';

const app = createApp(App);

const auth0Config = {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: process.env.VUE_APP_AUTH0_AUDIENCE,
  },
};
const auth0 = createAuth0(auth0Config);
app.use(auth0);
app.use(router);

app.mount('#app');