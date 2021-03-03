<template>
  <b-container class="container-fluid px-1 py-5 mx-auto">
    <b-row class="d-flex justify-content-center">
      <b-col class="col-xl-12 col-lg-10 col-md-11">
        <Card />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Card from './Card';
export default {
  name: 'MainContainer',
  components: {
    Card,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
