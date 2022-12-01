<template>
  <v-card width="400px">
    <form @submit.prevent="handleCreate" class="py-6 px-6">
      <v-text-field v-model="name" label="Name" required></v-text-field>

      <v-text-field
        v-model="start_date"
        label="Fecha de inicio"
        required
      ></v-text-field>

      <v-text-field
        v-model="end_date"
        label="Fecha de fin"
        required
      ></v-text-field>

      <v-btn class="mr-4" type="submit"> submit </v-btn>
    </form>
  </v-card>
</template>
<script>
import { createGroup } from "@/services/group/group";

export default {
  name: "RegisterGroup",
  data() {
    return {
      name: "string",
      start_date: "2022-12-01T10:32:29.990Z",
      end_date: "2022-12-01T10:32:29.990Z",
      users: [],
    };
  },
  methods: {
    handleCreate() {
      const { name, start_date, end_date, users } = this;
      createGroup({ name, start_date, end_date, users }).then(console.log);
    },
  },
};
</script>

<style lang="scss" scoped></style>
