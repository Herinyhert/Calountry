<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SiderBar />
    <NavBar />
    <RouterView></RouterView>
  </v-app>
</template>

<script>
import NavBar from "@/components/home/NavBar.vue";
import SiderBar from "../../components/home/SiderBar.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState(["auth"]),
  },
  components: { SiderBar, NavBar },
};
</script>
