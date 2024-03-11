const app = Vue.createApp({
  data() {
    return {

        randomInt: 0,
    };
  },

  methods: {

    createARandomInt() {
        this.randomInt = Math.floor(Math.random() * 1000);
    }
  },
});

app.mount("#vuebasics");
