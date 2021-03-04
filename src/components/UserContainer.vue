<template>
  <div>
    <b-row>
      <b-col md="auto">
        <b-calendar
          responsive="sm"
          v-model="value"
          @context="onContext"
          locale="en-US"
        ></b-calendar>
      </b-col>
      <b-col>
        <div>
          <b-table
            striped
            hover
            responsive="sm"
            :items="filteredTermineItemsGetter"
            :fields="termineFields"
            :select-mode="selectMode"
            ref="selectableTable"
            selectable
            @row-selected="onRowSelected"
            v-b-toggle.sidebar-1
          >
          </b-table>
        </div>
      </b-col>
    </b-row>
    <p>
      Selected Rows:<br />
      {{ selected }}
    </p>
    <b-sidebar
      v-if="selected"
      id="sidebar-1"
      title="Buchung"
      right
      bg-variant="light"
      text-variant="dark"
      shadow
    >
      <div class="px-3 py-2">
        <!-- <b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img> -->
        <p>
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Name"
                  required
                ></b-form-input>
              </b-form-group>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Event
              <b-badge variant="primary" pill>{{ selected.name }}</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Datum
              <b-badge variant="primary" pill>{{ selected.datum }}</b-badge>
            </b-list-group-item>

            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Uhrzeit
              <b-badge variant="primary" pill>{{ selected.uhrzeit }}</b-badge>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Teilnehmer
              <b-badge variant="primary" pill>{{
                selected.anzahlteilnehmer
              }}</b-badge>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              Standort
              <b-badge variant="primary" pill>{{ selected.standort }}</b-badge>
            </b-list-group-item>
          </b-list-group>
        </p>
        <div>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            :value="true"
            :unchecked-value="false"
          >
            Datenschutzerklärung
          </b-form-checkbox>
        </div>
        <b-button
          class="mt-2"
          variant="outline-primary"
          :disabled="!status"
          @click="sendData"
          >Buchen</b-button
        >
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: '' },
      status: false,
      value: '',
      context: null,
      selectMode: 'single',
      //   fields: ['name', 'datum', 'uhrzeit', 'anzahlteilnehmer', 'standort'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
      //   console.log(this.value);
      //   console.log(this.context);
      this.$store.dispatch('dateSelected', this.value);
      console.log(this.dateSelected);
      console.log(this.filteredTermineItemsGetter, 'filtered');
    },
    onRowSelected(items) {
      // this.selected = items;
      this.$store.dispatch('userChangeSelected', items);
    },
    sendData() {
      this.$store.dispatch('collectData', {
        nameteilnehmer: this.form.name,
        ...this.selected,
      });
      console.log(this.storeItems, 'updated buchungen');
    },
  },
  computed: {
    selected() {
      return this.$store.state.adminStore.userSelected;
    },
    dateSelected() {
      return this.$store.state.adminStore.selectedDate;
    },
    filteredTermineItemsGetter() {
      return this.$store.getters.filteredTermineItems;
    },
    termineFields() {
      return this.$store.state.adminStore.termineFields;
    },
    storeItems() {
      return this.$store.state.adminStore;
    },
  },
};
</script>

<style></style>
