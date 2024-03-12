const app = Vue.createApp({
  data() {
    return {
      name: "",
      lastName: "",
      month: 1,
    };
  },

  watch: {
    
    //12 months in a year
    //cannot be .>12 or .<1
    month(value) {
      if (value > 12 || value < 1) {
        this.month = 1;
      }
    },
  },

  methods: {
    monthUp() {
      this.month = this.month + 1;
    },

    monthDown() {
      this.month = this.month - 1;
    },
  },

  computed: {},
});

app.mount("#basics");
