<template>
  <div @click="testClick">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email Adresse eingeben"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Geben Sie Ihre Email Adresse ein "
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Passwort:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Geben Sie Ihren Passwort ein"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Einloggen</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.$store.dispatch('loggedIn', this.form);
      if (this.adminLoggedIn.email) {
        this.$router.push('admin');
        // localStorage.setItem('adminLoggedIn', true);
      }

      if (
        this.$store.state.adminStore.unternehmenItems.filter((el) => {
          return (
            el.login === this.form.email && el.password === this.form.password
          );
        }).length === 1
      ) {
        this.$store.dispatch('loggedInUserIs', this.form.email);
        this.$router.push('start');
      }
      // else {
      //   this.$router.push('user');
      //   // localStorage.setItem('adminLoggedIn', false);
      // }

      // alert(JSON.stringify(this.form));
    },
    testClick() {
      console.log(this.$store.state.adminStore.unternehmenItems);
      console.log();
    },
  },
  computed: {
    adminLoggedIn() {
      return this.$store.state.adminStore.adminData;
    },
    userLoggedIn() {
      return this.$store.state.adminStore.userData;
    },
  },
  mounted() {
    console.log(this.$store.state.adminStore.adminData.email);
  },
};
</script>

<style></style>
