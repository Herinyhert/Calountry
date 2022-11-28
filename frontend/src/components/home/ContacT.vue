<template>
  <v-card color="white" class="rounded-1g mt-2" flat>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card color="#2784ff" class="rounded-1g px-2" flat>
          <v-row>
            <v-col cols="12" sm="4">
              <v-avatar color="#dfedff" tile>
                <v-img src="" />
                <!-- aqui podemos mostrar una imagen para el usuario-->
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="8">
              <h4 class="white--text">
                {{
                  auth?.profile.name || "" + " " + auth?.profile.last_name || ""
                }}
              </h4>
              <h6 class="white--text">{{ auth?.profile.role || "" }}</h6>
            </v-col>
            <v-col cols="12" sm="12" class="mt-3">
              <v-row>
                <v-col cols="12" sm="4">
                  <h6 class="grey--text text--lighten-4">Height</h6>
                  <h6 class="white--text">185</h6>
                </v-col>
                <v-col cols="12" sm="4">
                  <h6 class="grey--text text--lighten-4">Height</h6>
                  <h6 class="white--text">185</h6>
                </v-col>
                <v-col cols="12" sm="4">
                  <h6 class="grey--text text--lighten-4">Bload type</h6>
                  <h6 class="white--text">AB+</h6>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card color="transparent" class="rounded-lg mx-2 px-2" flat>
          <span class="caption grey--text mt-n6">Phone Number</span>
          <h5 class="black--text mb-7">{{ auth.profile.phone_number }}</h5>
          <span class="caption grey--text">Technology Language</span>
          <h5 class="black--text">{{ auth.profile.technologies }}</h5>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card color="transparent" class="rounded-lg mx-2 px-2" flat>
          <span class="caption grey--text mt-n6">Email</span>
          <h5 class="black--text mb-7">{{ auth.profile.email }}</h5>
          <span class="caption grey--text">Pais</span>
          <h5 class="black--text">{{ auth.profile.country }}</h5>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {},
  computed: {
    ...mapState(["auth"]),
  },
};
</script>

<style lang="scss" scoped></style>
