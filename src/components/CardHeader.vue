<template>
  <div class="card-header">
    {{ someValueCount }}
    <b-row class="d-flex justify-content-between">
      <div class="ml-3">
        <h5 class="yellow-text">
          Header
        </h5>
        <h6>Subheader</h6>
      </div>
      <div class="text-md-center mr-2">
        <!-- Bearbeiten -->
        <b-button
          @click="doSomething"
          id="button-1"
          text="Bearbeiten"
          class="m-md-2"
          >Bearbeiten
        </b-button>
        <!-- Bearbeiten -->
        <b-dropdown id="dropdown-1" text="Neu" class="m-md-2">
          <b-dropdown-item @click="resetModal" v-b-modal.modal-1
            >Buchung</b-dropdown-item
          >
          <b-dropdown-item>Event</b-dropdown-item>
          <b-dropdown-item>Standort</b-dropdown-item>
        </b-dropdown>
        <b-modal id="modal-1" title="BootstrapVue" cancel-title="Schließen">
          <div>
            <b-form>
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
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>
          </div>
        </b-modal>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
    };
  },
  computed: {
    someValueCount() {
      return this.$store.state.adminStore.someValue;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    resetModal() {
      this.form.email = '';
      this.form.name = '';
    },
    doSomething() {
      this.$store.dispatch('removeSomeValue', 2);
    },
  },
};
</script>

<style></style>
