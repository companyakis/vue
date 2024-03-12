const app = Vue.createApp({
  data() {
    return {

      name: "",
      
    };
  },
  methods: {

    resetName() {
      this.name = ""
    },

  },
});

app.mount("#basics");
