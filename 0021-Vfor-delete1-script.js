const app = Vue.createApp({
  data() {
    return {
      subjects: [],
      subject: '',
      index: 0,
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
