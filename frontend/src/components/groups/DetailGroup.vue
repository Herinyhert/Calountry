<template>
  <div class="d-flex">
    <v-expansion-panels style="width: 20%">
      <v-expansion-panel v-for="user in this.users" :key="user.id">
        <v-expansion-panel-header>
          <h3>{{ user.name }}</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <h4>Last Name: {{ user.last_name }}</h4>
          <h4>Email: {{ user.email }}</h4>
          <h4>Country: {{ user.country }}</h4>
          <h4>Zone: {{ user.gmt_zone }}</h4>
          <h4>Technologies: {{ user.technologies }}</h4>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
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
