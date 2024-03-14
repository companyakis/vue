<!-- App.vue file -->
<!-- Let's use Vue CLI to create a Vue project -->

<template>
  <h3>Team Members</h3>
  <ul v-for="member in teamMembers" v-bind:key="member.name">
    <li>{{ member.name }} : {{ member.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      teamMembers: [
        { name: "Mustafa", title: "Founder" },
        { name: "Bilge Kutluk", title: "CFO" },
        { name: "Bumin Kültigin", title: "CTO" },
        { name: "Attila Kağan", title: "Auditor" },
      ],
    };
  },
};
</script>

<style>
</style>
