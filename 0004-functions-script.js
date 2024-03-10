const app = Vue.createApp({
    data() {
        return {
            lang1: 'Rust',
            lang2: 'Move',
            lang3: 'Solidity',
            googleIt: 'https://www.google.com/',
        };
    },

    methods: {
        greetingLanguage(langName) {
            return 'Hi ' + langName + "!";
        },
    }
});

app.mount('#webthree');
