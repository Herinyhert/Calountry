<template>
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
</template>

<script>
import ContacT from "@/components/home/ContacT.vue";
import AgendA from "@/components/home/AgendA.vue";
import GrouP from "@/components/home/GrouP.vue";
export default {
  name: "UserView",
  components: { ContacT, AgendA, GrouP },
};
</script>

<style lang="scss" scoped></style>
