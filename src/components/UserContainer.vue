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
            :items="items"
            :fields="fields"
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
      id="sidebar-1"
      title="Sidebar"
      right
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      context: null,
      selectMode: 'single',
      fields: ['first_name', 'last_name'],
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
      console.log(this.value);
      console.log(this.context);
    },
    onRowSelected(items) {
      // this.selected = items;
      this.$store.dispatch('userChangeSelected', items);
    },
  },
  computed: {
    selected() {
      return this.$store.state.adminStore.userSelected;
    },
  },
};
</script>

<style></style>
