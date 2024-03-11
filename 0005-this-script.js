const app = Vue.createApp({
  data() {
    return {
      congrats: 'You"re super!',
      warning: "Be careful! You should study hard!",
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
