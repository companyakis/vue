const app = Vue.createApp({

  data() {
    return {
      name: "",
    };
  },

  methods: {
    logAMessage() {
      console.log("B!");
    }
  },

  //Do you remember React UseEffect? Same logic is here => computed: {}

  computed: {
    logAComputedMessage() {
      console.log("A!");
    },

  },
});

app.mount("#basics");
