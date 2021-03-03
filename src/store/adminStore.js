const adminStore = {
  state: () => ({
    selected: {},
    adminData: {},
    userData: {},
    userSelected: {},
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
    changeSelected(state, items) {
      state.selected = items[0];
    },
    userChangeSelected(state, items) {
      state.userSelected = items[0];
    },
    updateSelectedForm(state, value) {
      state.selected = { ...selectedForm, value };
    },
    adminloggedIn(state, adminData) {
      console.log('adminloggedig');
      state.loggedIn = adminData;
    },
    userloggedin(state, userData) {
      state.loggedIn = userData;
      console.log('userloggedin');
    },
  },
  actions: {
    changeSelected(context, items) {
      context.commit('changeSelected', items);
    },
    userChangeSelected(context, items) {
      context.commit('userChangeSelected', items);
    },
    updateSelectedForm(context, value) {
      context.commit('updateSelectedForm', value);
    },
    loggedIn(context, personData) {
      if (personData.email === 'admin@admin.com') {
        context.commit('adminloggedIn', personData);
      } else {
        context.commit('userloggedin', personData);
      }
    },
  },
};

export default adminStore;
