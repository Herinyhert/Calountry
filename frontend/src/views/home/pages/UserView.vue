<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="9">
        <v-row>
          <v-col cols="12" sm="12">
            <ContacT />
          </v-col>
          <v-col cols="12" sm="12">
            <AgendA></AgendA>
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
import AgendA from "@/components/home/AgendA.vue";
import ContacT from "@/components/home/ContacT.vue";
import GrouP from "@/components/home/GrouP.vue";

export default {
  name: "UserView",
  components: { ContacT, GrouP, AgendA },
};
</script>

<style lang="scss" scoped></style>
