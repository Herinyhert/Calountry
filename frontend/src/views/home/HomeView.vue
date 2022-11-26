<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SiderBar />
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12" sm="9">
          <v-row>
            <v-col cols="12" sm="12">
              <ContacT />
            </v-col>
            <v-col cols="12" sm="12">
              <AgendA />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3">
          <GrouP />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/home/NavBar.vue";
import SiderBar from "../../components/home/SiderBar.vue";
import ContacT from "../../components/home/ContacT.vue";
import AgendA from "../../components/home/AgendA.vue";
import GrouP from "@/components/home/GrouP.vue";
export default {
  name: "HomeView",
  components: { SiderBar, NavBar, ContacT, AgendA, GrouP },
};
</script>
