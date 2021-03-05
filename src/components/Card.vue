<template>
  <b-card no-body class="card rounded-0 b-0 ">
    <CardHeader />
    <b-card-body class="pt-0 mb-3 mt-3">
      <div v-if="currentRouteName === 'Home'">
        <LoginForm />
      </div>
      <div v-else-if="currentRouteName === 'Admin'">
        <AdminCards />
      </div>
      <div v-else-if="currentRouteName === 'Start'">
        <StartContainer />
      </div>
      <div v-else-if="currentRouteName === 'User'">
        <UserContainer />
      </div>
      <div v-else-if="currentRouteName === 'Booking'">
        <BookingContainer />
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import CardHeader from './CardHeader';
import LoginForm from './LoginForm';
import AdminCards from './AdminCards';
import UserContainer from './UserContainer';
import StartContainer from './StartContainer';
import BookingContainer from './BookingContainer';

export default {
  name: 'Card',

  components: {
    CardHeader,
    LoginForm,
    AdminCards,
    UserContainer,
    StartContainer,
    BookingContainer,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    console.log(this.currentRouteName);
  },
};
</script>

<style></style>
