<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#2784ff"
    mini-variant
    mini-variant-width="80"
  >
    <router-link to="/home">
      <v-btn class="d-block text-center mx-auto mt-4 mb-16" size="40">
        <v-icon color="#529dff" x-large>fab fa-artstation</v-icon>
      </v-btn>
    </router-link>
    <v-list flat class="mt-16">
      <v-list-item-group v-model="selectedItem">
        <router-link to="/home/admin">
          <v-btn color="transparent">
            <v-icon class="mb-5" color="white">fas fa-file-medical-alt</v-icon>
          </v-btn>
        </router-link>
        <br />
        <router-link to="/">
          <v-btn color="transparent" style="margin-top: 20px">
            <v-icon class="mb-5" color="white">fas fa-user-nurse</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/detail/:id">
          <v-btn color="transparent" style="margin-top: 20px">
            <v-icon class="mb-5" color="white">fas fa-virus</v-icon>
          </v-btn>
        </router-link>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          active-class="border"
          :ripple="false"
        >
          <div @click="goTo(item.href)">
            <div class="d-flex justify-center">
              <v-icon v-text="item.icon" color="white"></v-icon>
            </div>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div class="my-style">
      <v-icon class="mb-5" color="white">fas fa-cog</v-icon>
      <br />
      <v-icon color="white">fas fa-info-circle</v-icon>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data: () => ({
    selectedItem: 3,
    drawer: null,
    items: [
      { icon: "fas fa-user-md" },
      { icon: "fas fa-comment-medical" },
    ],
  }),
  methods: {
    goTo(link) {
      this.$router.push("/home" + link);
    },
  },
  components: { RouterLink },
};
</script>

<style>
.border {
  margin-left: 12px;
  margin-right: 12px;
  background: #529dff;
  border-radius: 50%;
  text-decoration: none;
}

.my-style {
  position: absolute;
  bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.v-list-item-group .v-list-item--active {
  color: white !important;
}
</style>
