const app = Vue.createApp({
  data() {
    return {
      subjects: [],
      subject: '',
    };
  },

  watch: {},

  methods: {
    addSubject() {
      this.subjects.push(this.subject)
    },

    deleteSubject(index) {
      this.subjects.splice(index, 1)
    },
  },

  computed: {},
});

app.mount("#basics");
