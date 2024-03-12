const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  watch: {

      counter(value) {
        if (value > 100 || value < 0) {
          alert("Counter value should be between 0 and 100!")
          this.counter = 0;
        }
      }
    },

  methods: {
    counterUp() {
      this.counter = this.counter + 10;
    },

    counterDown() {
      this.counter = this.counter - 10;
    },
  },

  computed: {},
});

app.mount("#basics");
