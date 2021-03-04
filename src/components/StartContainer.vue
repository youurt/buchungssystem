<template>
  <div @click="showConsole">
    start con
  </div>
</template>

<script>
export default {
  methods: {
    showConsole() {
      console.log(this.$store.state.adminStore);
    },
  },
};
</script>

<style></style>
