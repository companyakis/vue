const app = Vue.createApp({

  data() {
    return {
      name: "",
      lastName: "",
    };
  },

  methods: {
 
  },

  //Do you remember React UseEffect? Same logic is here => computed: {}

  computed: {

    personNameAndSurname() {
      if (this.name == '' || this.lastName == '') {
        return ''
      } else {
        return this.name + ' ' + this.lastName
      }
    }

  },
});

app.mount("#basics");
