<template>
  <v-app-bar color="white" app dark flat>
    <!-- <v-icon color="black">fas fa-long-arrow-alt-left</v-icon> -->
    <h1 class="black--text ml-3">Calountry</h1>
    <v-spacer></v-spacer>
    <div v-if="auth.profile?.role == 'Admin'" class="d-flex align-center">
      <h4 class="blue--text text--linghten-2">Group history</h4>
      <v-icon x-samll color="#2784ff" class="ml-2 mr-2"
        >fas fa-caret-down</v-icon
      >
      <v-btn @click="handleAdd" color="#2784ff" class="withoutupercase">
        <v-icon left>fas fa-plus</v-icon> New group
      </v-btn>
    </div>
    <v-badge dot overlap color="green" class="ml-3 mr2" dark>
      <v-avatar tile color="#e5f1ff">
        <v-icon color="#2784ff">fas fa-bell</v-icon>
      </v-avatar>
    </v-badge>
    <!-- <v-avatar tile color="#e5f1ff">
      <v-img src="p.png"></v-img
      > aqui podriamos colocar una imagen de usuario
    </v-avatar> -->
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { ROLE } from "../../constants/index";
export default {
  name: "NavBar",
  state() {
    return {
      role: ROLE,
      role2: "may",
    };
  },
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    ...mapMutations({
      setTrue: "modals/setTrue",
    }),

    handleAdd() {
      if (this.$route.path == "/home/admin/groups") this.setTrue();
      else {
        this.$router.push("/home/admin/groups");
        this.setTrue();
      }
    },
  },
};
</script>

<style>
.v-btn.withoutupercase {
  text-transform: none !important;
}
</style>
