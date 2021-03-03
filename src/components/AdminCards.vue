<template>
  <div>
    <b-card no-body class="mt-2 ">
      <b-tabs pills card>
        <b-tab title="Tab 1"
          ><b-card-text>
            <b-table
              striped
              hover
              :items="items"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              :select-mode="selectMode"
              ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
            ></b-table></b-card-text
        ></b-tab>
        <b-tab title="Tab 2"
          ><b-card-text
            ><b-table
              striped
              hover
              :items="items"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              :select-mode="selectMode"
              ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
            ></b-table></b-card-text
        ></b-tab>
        <b-tab title="Tab 3"
          ><b-card-text
            ><b-table
              striped
              hover
              :items="items"
              :fields="fields"
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
    selected() {
      return this.$store.state.adminStore.selected;
    },
  },
  methods: {
    onRowSelected(items) {
      // this.selected = items;
      this.$store.dispatch('changeSelected', items);
    },
  },
  data() {
    return {
      selectMode: 'single',
      perPage: 5,
      currentPage: 1,
    };
  },
};
</script>

<style></style>
