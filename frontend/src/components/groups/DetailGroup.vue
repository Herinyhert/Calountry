<template>
  <v-expansion-panels style="width: 20%">
    <v-expansion-panel v-for="user in this.users" :key="user.id">
      <v-expansion-panel-header>
        <h1>{{ user.name }}</h1>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <h3>Last Name: {{ user.last_name }}</h3>
        <h3>Email: {{ user.email }}</h3>
        <h3>Country: {{ user.country }}</h3>
        <h3>Zone: {{ user.gmt_zone }}</h3>
        <h3>Technologies: {{ user.technologies }}</h3>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "DetailGroup",
  props: {
    users: { type: Array },
  },
};
</script>

<style lang="scss" scoped></style>
