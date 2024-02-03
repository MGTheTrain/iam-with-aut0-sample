<template>
  <div class="container text-center mt-5">
    <h1 class="display-3">{{ title }}</h1>
    <p class="lead">Welcome to {{ title }}!</p>
    <div class="d-flex justify-content-center align-items-center">
      <button v-if="!isAuthenticated" @click="login" class="btn btn-primary">Login</button>
      <button v-if="isAuthenticated" @click="logout" class="btn btn-success">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
@import "bootstrap/dist/css/bootstrap.min.css";
</style>

<script>
import { ref, onUpdated } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  setup() {
    const title = 'sample-app';
    const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
    const accessToken = ref(null);

    onUpdated(async () => {
      // console.log(isAuthenticated.value); // lifecycle hook should be onUpdated and not onMounted. See: https://vuejs.org/guide/essentials/lifecycle
      if (isAuthenticated.value) {
        try {
          const token = await getAccessTokenSilently();
          accessToken.value = token;
          console.log('Access Token:', accessToken.value);
        } catch (error) {
          console.error('Error getting access token:', error);
        }
      }
    });

    return {
      title,
      isAuthenticated,
      login: loginWithRedirect,
      logout,
      accessToken,
    };
  },
};
</script>
