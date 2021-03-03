<template>
  <div>
    <div v-if="adminLoggedIn">
      <MainContainer />
    </div>
    <div v-else>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import MainContainer from '../components/MainContainer';
import LoginForm from '../components/LoginForm';
export default {
  name: 'Admin',
  components: { MainContainer, LoginForm },
  computed: {
    adminLoggedIn() {
      return localStorage.getItem('adminLoggedIn') === true;
    },
  },
};
</script>

<style></style>
