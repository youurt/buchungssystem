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
        <div v-if="currentRouteName === 'Admin'">
          <b-button
            v-if="selectedForm"
            id="button-1"
            text="Bearbeiten"
            class="m-md-2"
            v-b-modal.modal-1
            >Bearbeiten
          </b-button>

          <b-dropdown id="dropdown-1" text="Neu" class="m-md-2">
            <b-dropdown-item @click="resetModal" v-b-modal.modal-2
              >Unternehmen</b-dropdown-item
            >
            <b-dropdown-item @click="resetModal" v-b-modal.modal-3
              >Event</b-dropdown-item
            >
            <b-dropdown-item @click="resetModal" v-b-modal.modal-4
              >Termine</b-dropdown-item
            >
            <b-dropdown-item @click="resetModal" v-b-modal.modal-5
              >Standort</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <!-- Bearbeiten -->
        <div v-if="selectedForm">
          <b-modal
            id="modal-1"
            title="Bearbeiten"
            ref="my-modal"
            cancel-title="Schließen"
          >
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
                    v-model="selectedForm.name"
                    placeholder="Edit Age"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-form>
              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ selectedForm }}</pre>
              </b-card>
            </div>
          </b-modal>
        </div>
        <!-- Bearbeiten -->

        <!-- Neu Unternehmen -->

        <b-modal
          id="modal-2"
          title="Neues Unternehmen hinzufügen"
          cancel-title="Schließen"
          hide-footer
          ref="my-modal-unternehmen"
        >
          <div>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="unternehmenData.name"
                  placeholder="Name des Unterhmens"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Adresse:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="unternehmenData.adresse"
                  placeholder="Adresse des Unternehmens"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Login:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  type="email"
                  v-model="unternehmenData.login"
                  placeholder="Login des Unternehmens"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-4"
                label="Passwort:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  type="password"
                  v-model="unternehmenData.password"
                  placeholder="Passwort des Unternehmens"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ unternehmenData }}</pre>
            </b-card> -->
          </div>
          <b-button class="mt-3" @click="hideModalU">Bestätigen</b-button>
        </b-modal>
        <!-- Neu Unternehmen-->
        <!-- Neu Event-->
        <b-modal
          id="modal-3"
          title="Neues Event hinzufügen"
          cancel-title="Schließen"
          hide-footer
          ref="my-modal-event"
        >
          <div>
            <b-form>
              <b-form-group
                id="input-group-5"
                label="Name:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="eventData.name"
                  placeholder="Name der Buchhung"
                  required
                ></b-form-input>
              </b-form-group>

              <!-- <b-form-group id="input-group-6" label="ID:" label-for="input-6">
                <b-form-input
                  id="input-6"
                  v-model="unternehmenData.id"
                  placeholder="ID der Buchung"
                  readonly
                  required
                ></b-form-input>
              </b-form-group> -->
              <b-form-group
                id="input-group-7"
                label="Datum:"
                label-for="input-7"
              >
                <b-form-input
                  id="input-7"
                  v-model="eventData.datum"
                  placeholder="Datum des Events"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-8"
                label="Uhrzeit:"
                label-for="input-8"
              >
                <b-form-input
                  id="input-8"
                  v-model="eventData.uhrzeit"
                  placeholder="Uhrzeit des Events"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-9"
                label="Name Teilnehmer:"
                label-for="input-9"
              >
                <b-form-input
                  id="input-9"
                  v-model="eventData.nameteilnehmer"
                  placeholder="Name des Teilnehmers"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-10"
                label="Standort:"
                label-for="input-10"
              >
                <b-form-input
                  id="input-10"
                  v-model="eventData.standort"
                  placeholder="Standort des Events"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ unternehmenData }}</pre>
            </b-card> -->
          </div>
          <b-button class="mt-3" @click="hideModalT">Bestätigen</b-button>
        </b-modal>
        <!-- Neu Event-->
        <b-modal
          id="modal-4"
          title="Neues Termin hinzufügen"
          cancel-title="Schließen"
          hide-footer
          ref="my-modal-termin"
        >
          <div>
            <b-form>
              <b-form-group
                id="input-group-11"
                label="Name:"
                label-for="input-11"
              >
                <b-form-input
                  id="input-11"
                  v-model="termineData.name"
                  placeholder="Name des Termins"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-12"
                label="Datum:"
                label-for="input-12"
              >
                <b-form-input
                  id="input-12"
                  v-model="termineData.datum"
                  placeholder="Datum des Termins"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-13"
                label="Uhrzeit:"
                label-for="input-13"
              >
                <b-form-input
                  id="input-13"
                  v-model="termineData.uhrzeit"
                  placeholder="Uhrzeit des Termins"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-14"
                label="Anzahl Teilnehmer:"
                label-for="input-14"
              >
                <b-form-input
                  id="input-14"
                  v-model="termineData.anzahlteilnehmer"
                  placeholder="Anzahl Teilnehmer"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-14"
                label="Standort:"
                label-for="input-14"
              >
                <b-form-input
                  id="input-15"
                  v-model="termineData.standort"
                  placeholder="Standort des Termins"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ unternehmenData }}</pre>
            </b-card> -->
          </div>
          <b-button class="mt-3" @click="hideModalT">Bestätigen</b-button>
        </b-modal>
        <!-- Neu Event-->
        <b-modal
          id="modal-5"
          title="Neuen Standort hinzufügen"
          cancel-title="Schließen"
          hide-footer
          ref="my-modal-standorte"
        >
          <div>
            <b-form>
              <b-form-group
                id="input-group-16"
                label="Name:"
                label-for="input-16"
              >
                <b-form-input
                  id="input-16"
                  v-model="standorteData.name"
                  placeholder="Name des Standortes"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-17"
                label="Anschrift:"
                label-for="input-17"
              >
                <b-form-input
                  id="input-17"
                  v-model="standorteData.anschrift"
                  placeholder="Anschrift des Standortes"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-18"
                label="Ansprechpartner:"
                label-for="input-18"
              >
                <b-form-input
                  id="input-18"
                  v-model="standorteData.ansprechpartner"
                  placeholder="Name des Ansprechpartners"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-19"
                label="Telefon:"
                label-for="input-19"
              >
                <b-form-input
                  id="input-19"
                  v-model="standorteData.telefon"
                  placeholder="Telefon"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-20"
                label="Email:"
                label-for="input-20"
              >
                <b-form-input
                  id="input-20"
                  v-model="standorteData.email"
                  placeholder="Email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-21"
                label="Bemerkungen:"
                label-for="input-22"
              >
                <b-form-input
                  id="input-22"
                  v-model="standorteData.bemerkungen"
                  placeholder="Bemerkungen"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ unternehmenData }}</pre>
            </b-card> -->
          </div>
          <b-button class="mt-3" @click="hideModalS">Bestätigen</b-button>
        </b-modal>
      </div>
    </b-row>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
      unternehmenData: {
        name: '',
        adresse: '',
        login: '',
        password: '',
      },
      eventData: {
        name: '',
        id: nanoid(6),
        datum: '',
        uhrzeit: '',
        nameteilnehmer: '',
        standort: '',
      },
      termineData: {
        name: '',
        datum: '',
        uhrzeit: '',
        anzahlteilnehmer: '',
        standort: '',
      },
      standorteData: {
        name: '',
        anschrift: '',
        ansprechpartner: '',
        telefon: '',
        email: '',
        bemerkungen: '',
      },
    };
  },
  computed: {
    selected() {
      return this.$store.state.adminStore.selected;
    },
    currentRouteName() {
      return this.$route.name;
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
    hideModalU() {
      this.$refs['my-modal-unternehmen'].hide();
      this.$store.commit('addUnternehmen', this.unternehmenData);
      // console.log(this.unternehmenData);
    },
    hideModalE() {
      this.$refs['my-modal-event'].hide();
      this.$store.commit('addEvent', this.eventData);
      // console.log(this.unternehmenData);
    },
    hideModalT() {
      this.$refs['my-modal-termin'].hide();
      this.$store.commit('addTermin', this.termineData);
      // console.log(this.unternehmenData);
    },
    hideModalS() {
      this.$refs['my-modal-standorte'].hide();
      this.$store.commit('addStandort', this.standorteData);
      // console.log(this.unternehmenData);
    },
    resetModal() {
      this.unternehmenData.name = '';
      this.unternehmenData.adresse = '';
      this.unternehmenData.login = '';
      this.unternehmenData.password = '';
    },
  },
};
</script>

<style></style>
