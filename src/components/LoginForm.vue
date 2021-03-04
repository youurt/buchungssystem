<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
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
        localStorage.setItem('adminLoggedIn', true);
      } else {
        this.$router.push('user');
        localStorage.setItem('adminLoggedIn', false);
      }

      // alert(JSON.stringify(this.form));
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
