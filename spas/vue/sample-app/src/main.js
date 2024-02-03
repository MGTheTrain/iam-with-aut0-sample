import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import router from './router';

const app = createApp(App);

app.use(
  createAuth0({
    domain: 'dev-d81cx3ar5jc0hn2z.us.auth0.com', // Auth0 **application** specific value
    clientId: 'N7nDGcMjEwUSSn1RZjhSTPk59zUfWThK', // Auth0 **application** specific value
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: 'https://quickstart/api', // Auth0 **API** specific value
    }
  })
);
app.use(router);

app.mount('#app');