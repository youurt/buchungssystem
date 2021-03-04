import { nanoid } from 'nanoid';

const adminStore = {
  state: () => ({
    selected: null,
    adminData: {},
    userData: {},
    userSelected: {},
    active: 'Unternehmen',
    unternehmenData: {},
    selectedDate: '',
    loggedInUser: '',
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
    unternehmenFields: [
      {
        key: 'name',
        sortable: true,
      },
      {
        key: 'adresse',
        sortable: true,
      },
      {
        key: 'login',
        label: 'Login',
        sortable: true,
      },
      {
        key: 'password',
        label: 'Password',
        sortable: true,
      },
    ],
    unternehmenItems: [
      {
        name: 'Unternehmen A',
        adresse: 'Eine Adresse 3, 12345 Stadt',
        login: 'unta@mail.de',
        password: '123456',
      },
      {
        name: 'Unternehmen B',
        adresse: 'Eine Adresse 2, 12345 Stadt',
        login: 'untb@mail.de',
        password: '1234567',
      },
      {
        name: 'Unternehmen C',
        adresse: 'Eine Adresse 6, 12345 Stadt',
        login: 'untc@mail.de',
        password: '1d23456',
      },
      {
        name: 'Unternehmen D',
        adresse: 'Eine Adresse 43, 12345 Stadt',
        login: 'untd@mail.de',
        password: '1rr23456',
      },
    ],
    buchungenFields: [
      {
        key: 'name',
        sortable: true,
      },
      {
        key: 'id',
        sortable: true,
      },
      {
        key: 'datum',
        label: 'Datum',
        sortable: true,
      },
      {
        key: 'uhrzeit',
        label: 'Uhrzeit',
        sortable: true,
      },
      {
        key: 'nameteilnehmer',
        label: 'Name Teilnehmer',
        sortable: true,
      },
      {
        key: 'standort',
        label: 'Standort',
        sortable: true,
      },
    ],
    buchungenItems: [
      {
        name: 'Buchung A',
        id: nanoid(6),
        datum: '2021-03-21',
        uhrzeit: '15:00:00',
        nameteilnehmer: 'John Doe',
        standort: 'Standort A',
      },
      {
        name: 'Buchung B',
        id: nanoid(6),
        datum: '2021-03-17',
        uhrzeit: '12:00:00',
        nameteilnehmer: 'Jane Doe',
        standort: 'Standort C',
      },
      {
        name: 'Buchung C',
        id: nanoid(6),
        datum: '2021-03-07',
        uhrzeit: '11:00:00',
        nameteilnehmer: 'John Dane',
        standort: 'Standort C',
      },
    ],
    termineFields: [
      {
        key: 'name',
        sortable: true,
      },
      {
        key: 'datum',
        sortable: true,
      },
      {
        key: 'uhrzeit',
        sortable: true,
      },
      {
        key: 'anzahlteilnehmer',
        label: 'Teilnehmer',
        sortable: true,
      },
      {
        key: 'standort',
        label: 'Standort',
        sortable: true,
      },
    ],
    termineItems: [
      {
        name: 'Termin A',
        datum: '2021-03-07',
        uhrzeit: '11:00:00',
        anzahlteilnehmer: '12',
        standort: 'Standort C',
      },
      {
        name: 'Termin X',
        datum: '2021-03-07',
        uhrzeit: '13:00:00',
        anzahlteilnehmer: '13',
        standort: 'Standort B',
      },
      {
        name: 'Termin B',
        datum: '2021-03-17',
        uhrzeit: '12:00:00',
        anzahlteilnehmer: '22',
        standort: 'Standort C',
      },
      {
        name: 'Termin C',
        datum: '2021-03-21',
        uhrzeit: '15:00:00',
        anzahlteilnehmer: '2',
        standort: 'Standort A',
      },
    ],
    standorteFields: [
      {
        key: 'name',
        sortable: true,
      },
      {
        key: 'anschrift',
        sortable: true,
      },
      {
        key: 'ansprechpartner',
        sortable: true,
      },
      {
        key: 'telefon',
        label: 'Telefon',
        sortable: true,
      },
      {
        key: 'email',
        label: 'Email',
        sortable: true,
      },
      {
        key: 'bemerkungen',
        label: 'Bemerkungen',
        sortable: true,
      },
    ],
    standorteItems: [
      {
        name: 'Termin A',
        anschrift: 'Eine Adresse 3, 12345 Stadt',
        ansprechpartner: 'Herr XYZ',
        telefon: '12123444',
        email: 'xyz@web.de',
        standort: 'Standort A',
        bemerkungen: '',
      },
      {
        name: 'Termin B',
        anschrift: 'Eine Adresse 1, 12345 Stadt',
        ansprechpartner: 'Herr ABZ',
        telefon: '12123444',
        email: 'abz@web.de',
        standort: 'Standort C',
        bemerkungen: '',
      },
      {
        name: 'Termin C',
        anschrift: 'Eine Adresse 21, 12345 Stadt',
        ansprechpartner: 'Herr XXX',
        telefon: '12112323444',
        email: 'xxx@web.de',
        standort: 'Standort B',
        bemerkungen: '',
      },
    ],
  }),
  getters: {
    updatedUnternehmen: (state) => {
      state.unternehmenItems.push(state.unternehmenData);
      return state.unternehmenItems;
    },
    filteredTermineItems: (state) => {
      const data = state.termineItems.filter((item) => {
        return item.datum === state.selectedDate;
      });
      return data;
    },
    counterItems: (state) => {
      if (state.active === 'Unternehmen') {
        return null;
      } else if (state.active === 'Buchungen') {
        return `${state.buchungenItems.length} Buchungen`;
      } else if (state.active === 'Termine') {
        return `${state.termineItems.length} Termine`;
      } else if (state.active === 'Standorte') {
        return `${state.standorteItems.length} Standorte`;
      }
    },
  },
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
      state.adminData = adminData;
    },
    userloggedin(state, userData) {
      state.userData = userData;
    },
    addUnternehmen(state, unternehmenData) {
      state.unternehmenItems.push(unternehmenData);
    },
    addEvent(state, eventData) {
      state.buchungenItems.push(eventData);
    },
    addTermin(state, terminData) {
      state.termineItems.push(terminData);
    },
    addStandort(state, standortData) {
      state.standorteItems.push(standortData);
    },
    activeTab(state, activeData) {
      state.active = activeData;
    },
    updateUnternehmen(state, uValue) {
      state.unternehmenData = uValue;
      //   state.unternehmenItems.push(uValue);
    },
    dateSelected(state, dateValue) {
      state.selectedDate = dateValue;
    },
    collectData(state, payload) {
      state.buchungenItems.push({
        name: 'Buchung neu',
        id: nanoid(6),
        datum: payload.datum,
        uhrzeit: payload.uhrzeit,
        nameteilnehmer: payload.nameteilnehmer,
        standort: payload.standort,
      });
    },
    loggedInUserIs(state, user) {
      state.loggedInUser = user;
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
    addUnternehmen(context, unternehmenData) {
      context.commit('addUnternehmen', unternehmenData);
    },
    addEvent(context, eventData) {
      context.commit('addEvent', eventData);
    },
    addTermin(context, terminData) {
      context.commit('addTermin', terminData);
    },
    addStandort(context, standortData) {
      context.commit('addStandort', standortData);
    },
    activeTab(context, activeData) {
      context.commit('activeTab', activeData);
    },
    updateUnternehmen(context, uValue) {
      context.commit('updateUnternehmen', uValue);
    },
    dateSelected(context, dateValue) {
      context.commit('dateSelected', dateValue);
    },
    collectData(context, payload) {
      context.commit('collectData', payload);
    },
    loggedInUserIs(context, user) {
      context.commit('loggedInUserIs', user);
    },
  },
};

export default adminStore;
