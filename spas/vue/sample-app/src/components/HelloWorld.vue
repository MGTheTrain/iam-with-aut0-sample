<template>
  <div class="container text-center mt-5">
    <h1 class="display-3">{{ title }}</h1>
    <p class="lead">Welcome to {{ title }}!</p>
    <div class="d-flex justify-content-center align-items-center">
      <button v-if="!this.$auth0.isAuthenticated" @click="login" class="btn btn-primary">Login</button>
      <button v-if="this.$auth0.isAuthenticated" @click="logout" class="btn btn-success">Logout</button>
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

export default {
  data() {
    return {
      title: "sample-app",
      auth: {
        isAuthenticated: false, 
      },
    };
  },
  
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
    logout() {
      this.$auth0.logout();
    }
  }
};
</script>
