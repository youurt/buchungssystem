<template>
  <!-- the footer is just a bootstrap navbar which is used with a container at the bottom of the page -->
  <div>
    <b-navbar
      class="shadow-lg bg-white rounded"
      fixed="bottom"
      toggleable="lg"
      variant="secondary"
      sticky
    >
      <b-container class="container-fluid justify-content-center">
        <div class="text-center p-6">
          © 2021:
          <a class="dark-text" href="/">COMPANY NAME</a>
        </div>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$dark-color: #000;

.dark-text {
  color: $dark-color;
}
</style>
