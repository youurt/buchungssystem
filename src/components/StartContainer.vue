<template>
  <div>
    <p class="text">Hallo {{ this.$store.state.adminStore.loggedInUser }}!</p>

    <p class="mt-1 text">
      {{ loggedCompany }}
    </p>

    <b-container class="mt-4 d-flex justify-content-center align-items-center">
      <b-button v-b-modal.modal-1 @click="nextPage">Event Buchen</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      console.log(this.loggedUser);
      console.log(this.loggedCompany);
      this.$router.push('user');
    },
  },
  computed: {
    loggedUser() {
      console.log(this.$store.state.adminStore.loggedInUser);
    },
    loggedCompany() {
      return this.$store.getters.getCompanyText[0].welcome;
    },
  },
};
</script>

<style>
.text {
  text-align: center;
}
</style>
