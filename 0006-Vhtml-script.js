const app = Vue.createApp({
  data() {
    return {
      congrats: "<h3>You're super!</h3>",
      warning: "<h3>Be careful! You should study hard!</h3>",
      aProverb: "<h1>A rolling stone gathers no moss!</h1>"
    };
  },

  methods: {
    whatTeacherSays() {
      const randomGrade = Math.floor(Math.random() * 100);

      if (randomGrade > 85) {
        return this.congrats;
      } else {
        return this.warning;
      }
    },
  },
});

app.mount("#vuebasics");
