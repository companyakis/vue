const app = Vue.createApp({
  data() {
    return {
      subjects: ["Dummy"],
      subject: '',
    };
  },

  watch: {},

  methods: {
    addSubject() {
      this.subjects.push(this.subject)
    }
  },

  computed: {},
});

app.mount("#basics");
