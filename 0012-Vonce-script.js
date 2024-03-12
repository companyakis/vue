const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      i: 0,
    };
  },
  methods: {
    counterUp(i) {
      i = Number(document.getElementById("upordown").value),
        this.counter = this.counter + i;
    },

    counterDown(i) {
      i = Number(document.getElementById("upordown").value),
        this.counter = this.counter - i;
    },
  },
});

app.mount("#basics");
