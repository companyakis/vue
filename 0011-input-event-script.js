const app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      year: 0,
    };
  },

  methods: {
    setFirstName(event) {
      this.firstName = event.target.value;
    },

    setLastName(event) {
      this.lastName = event.target.value;
    },

    setYear(event) {
      this.year = event.target.value;
    }

  },
});

app.mount("#vuebasics");
