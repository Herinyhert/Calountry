<template>
  <v-card color="white" class="rounded-lg mt-2" flat>
    <v-row justify="center" class="pt-2">
      <v-date-picker
        v-model="picker"
        color="#2784ff"
        width="260"
      ></v-date-picker>
    </v-row>
    <v-toolbar color="transparent" flat class="mt-4">
      <v-avatar tile color="#ecf5ff">
        <v-icon color="#2784ff">fas fa-angle-up</v-icon>
      </v-avatar>
    </v-toolbar>
    <v-list class="mt-n6" color="transparent" dense>
      <v-list-item
        v-for="chat in chats"
        :key="chat.title"
        v-on:click="detail(chat.id)"
      >
        <!-- <router-link :to="'/detail/' + chat.id"> -->
        <v-list-item-avatar tile>
          <v-img :src="chat.img" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-btn>
            <v-list-item-content>
              <v-list-item-title
                v-text="chat.name"
                class="black--text"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-text="chat.id"
                class="grey--text"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-btn>
        </v-list-item-content>
        <!-- </router-link> -->
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { getMyGroups } from "@/services/group/group";
import { mapState } from "vuex";

export default {
  data: () => ({
    chats: [],
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  mounted() {
    // console.log("te quiero ver",this.auth?.profile?.id);
    getMyGroups(this.auth?.profile?.id).then((res) => {
      this.chats = res;
    });
  },
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    detail(id) {
      this.$router.push("group/group-details/" + id);
      console.log(id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
