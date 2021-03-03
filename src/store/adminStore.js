const adminStore = {
  state: () => ({
    someValue: 100,
    selected: null,
    fields: [
      {
        key: 'last_name',
        sortable: true,
      },
      {
        key: 'first_name',
        sortable: true,
      },
      {
        key: 'age',
        label: 'Person age',
        sortable: true,
        // Variant applies to the whole column, including the header and footer
        //   variant: 'danger',
      },
    ],
    items: [
      {
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald',
      },
      { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    ],
  }),
  mutations: {
    removeSomeValue(state, amount) {
      state.someValue -= amount;
    },
    changeSelected(state, items) {
      state.selected = items;
    },
  },
  actions: {
    removeSomeValue(context, amount) {
      context.commit('removeSomeValue', amount);
    },
    changeSelected(context, item) {
      context.commit('changeSelected', item);
    },
  },
};

export default adminStore;
