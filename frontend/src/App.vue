<template>
  <v-app>
    <v-content>
      <navigation />
      <router-view to="/home" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "./components/Navigation.vue";
import Home from "./views/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
});
</script>
