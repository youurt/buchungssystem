<template>
  <div>
    <b-card no-body class="mt-2 ">
      <b-tabs pills card>
        <b-tab title="Unternehmen" @click="showTitle"
          ><b-card-text>
            <b-table
              striped
              responsive="sm"
              hover
              :items="itemsUnt"
              :fields="fieldsUnt"
              :per-page="perPage"
              :current-page="currentPage"
              :select-mode="selectMode"
              ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
            ></b-table></b-card-text
        ></b-tab>
        <b-tab title="Buchungen" @click="showTitle"
          ><b-card-text
            ><b-table
              striped
              responsive="sm"
              hover
              :items="itemsBuch"
              :fields="fieldsBuch"
              :per-page="perPage"
              :current-page="currentPage"
              :select-mode="selectMode"
              ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
            ></b-table></b-card-text
        ></b-tab>
        <b-tab title="Termine" @click="showTitle"
          ><b-card-text
            ><b-table
              striped
              responsive="sm"
              hover
              :items="itemsTermine"
              :fields="fieldsTermine"
              :per-page="perPage"
              :current-page="currentPage"
              :select-mode="selectMode"
              ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
            ></b-table></b-card-text
        ></b-tab>
        <b-tab title="Standorte" @click="showTitle"
          ><b-card-text
            ><b-table
              striped
              responsive="sm"
              hover
              :items="itemsStandorte"
              :fields="fieldsStandorte"
              :per-page="perPage"
              :current-page="currentPage"
              :select-mode="selectMode"
              ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
            ></b-table></b-card-text
        ></b-tab>
      </b-tabs>

      <b-container
        class="mt-3 d-flex justify-content-center align-items-center"
      >
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </b-container>
    </b-card>
    <p>
      Selected Rows:<br />
      {{ selected }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    rows() {
      return this.items.length;
    },
    fields() {
      return this.$store.state.adminStore.fields;
    },
    items() {
      return this.$store.state.adminStore.items;
    },
    fieldsUnt() {
      return this.$store.state.adminStore.unternehmenFields;
    },
    itemsUnt() {
      return this.$store.state.adminStore.unternehmenItems.map((el) => {
        return { ...el, password: '*******' };
      });
    },
    fieldsBuch() {
      return this.$store.state.adminStore.buchungenFields;
    },
    itemsBuch() {
      return this.$store.state.adminStore.buchungenItems;
    },
    fieldsTermine() {
      return this.$store.state.adminStore.termineFields;
    },
    itemsTermine() {
      return this.$store.state.adminStore.termineItems;
    },
    selected() {
      return this.$store.state.adminStore.selected;
    },
    fieldsStandorte() {
      return this.$store.state.adminStore.standorteFields;
    },
    itemsStandorte() {
      return this.$store.state.adminStore.standorteItems;
    },
    showActiveTab() {
      return this.$store.state.adminStore.active;
    },
  },

  methods: {
    onRowSelected(items) {
      // this.selected = items;
      console.log(this.showActiveTab);
      this.$store.dispatch('changeSelected', items);
    },
    showTitle(e) {
      this.$store.dispatch('activeTab', e.target.innerText);
      // console.log(e.target.innerText);
    },
  },
  data() {
    return {
      selectMode: 'single',
      perPage: 5,
      currentPage: 1,
    };
  },
  mounted() {},
};
</script>

<style></style>
