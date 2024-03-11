const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    counterUp(number) {
      this.counter = 2 * this.counter + number;
    },

    counterDown(number) {
      this.counter = 2 * this.counter - number;
    },
  },
});

app.mount("#vuebasics");
