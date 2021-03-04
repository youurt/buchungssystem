<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="ml-2" href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-2">
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item
              ><router-link to="/">Home</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="admin">Admin</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="start">Start</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="user">User</router-link></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <b-navbar
      toggleable="lg"
      type="dark"
      class=" shadow-lg p-1  bg-white rounded"
    >
      <b-navbar-brand href="/"
        ><div class="ml-3 dark-text">
          LOGO
        </div></b-navbar-brand
      >

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="dark-text">
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>


        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>

            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
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
a {
  color: black;
  text-decoration: none;

  &.router-link-exact-active {
    color: grey;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
