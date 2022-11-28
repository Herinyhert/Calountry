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
      <v-space></v-space>
      <v-avatar tile color="#ecf5ff">
        <v-icon color="#2784ff">fas fa-angle-up</v-icon>
      </v-avatar>
    </v-toolbar>
    <v-list class="mt-n6" color="transparent" dense>
      <v-list-item v-for="chat in chats" :key="chat.title">
        <v-list-item-avatar tile>
          <v-img :src="chat.img" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-btn>
            <v-list-item-content>
              <router-link to="/detail">
                <v-list-item-title
                  v-text="chat.title"
                  class="black--text"
                ></v-list-item-title>
              </router-link>
              <v-list-item-subtitle
                v-text="chat.subtitle"
                class="grey--text"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    chats: [
      {
        img: "##",
        subtitle: "C8-39-T-Vue",
        title: "Calountry",
      },
      {
        img: "##",
        subtitle: "React Redux - JS",
        title: "CompusTore",
      },
      {
        img: "##",
        subtitle: "TL-Team-C8",
        title: "Team",
      },
    ],
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
};
</script>

<style lang="scss" scoped></style>
