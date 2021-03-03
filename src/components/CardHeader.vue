<template>
  <div class="card-header">
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
          v-if="showSelected"
          id="button-1"
          text="Bearbeiten"
          class="m-md-2"
          v-b-modal.modal-1
          >Bearbeiten
        </b-button>

        <!-- Bearbeiten -->
        <!-- <b-dropdown id="dropdown-1" text="Neu" class="m-md-2">
          <b-dropdown-item @click="resetModal" v-b-modal.modal-2
            >Buchung</b-dropdown-item
          >
          <b-dropdown-item>Event</b-dropdown-item>
          <b-dropdown-item>Standort</b-dropdown-item>
        </b-dropdown> -->

        <!-- MODAL Bearbeiten -->
        <b-modal id="modal-1" hide-footer title="BootstrapVue" ref="my-modal">
          <div>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Age:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="selectedForm.age"
                  placeholder="Edit Age"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ selectedForm }}</pre>
            </b-card>
            <b-button class="mt-2" variant="primary" block @click="hideModal"
              >OK</b-button
            >
          </div>
        </b-modal>
        <!-- MODAL Bearbeiten -->

        <!-- MODAL Neu Buchung-->
        <!-- <b-modal id="modal-2" title="BootstrapVue" cancel-title="Schließen">
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
        </b-modal> -->
        <!-- MODAL Neu Buchung -->
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
    showSelected() {
      return Object.keys(this.$store.state.adminStore.selected).length > 0;
    },
    selected() {
      return this.$store.state.adminStore.selected;
    },
    selectedForm: {
      get() {
        return this.$store.state.adminStore.selected;
      },
      set(value) {
        this.$store.commit('updateSelectedForm', value);
      },
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

    hideModal() {
      // this.$store.dispatch('updateStateData', this.computedSelectedData);
      this.$refs['my-modal'].hide();
    },
  },
  mounted() {
    console.log();
  },
};
</script>

<style></style>
