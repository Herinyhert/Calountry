<template>
  <div class="px-5">
    <v-data-table
      :headers="headers"
      :items="allUsers"
      :items-per-page="15"
      class="elevation-1 my-5"
      @click:row="handleRowClick"
    >
      <template v-slot:top>
        <p class="px-5 pt-5 blue--text">Usuarios</p>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { getUsers } from "@/services/user/user";
export default {
  name: "EditGroup",
  data() {
    return {
      group: {},
      allUsers: [],
      isError: false,
      updatedOk: false,
      headers: [
        { text: "User", value: "user_name" },
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Apellido", value: "last_name" },
        { text: "País", value: "country" },
        { text: "Correo", value: "email" },
        { text: "Zona Horaria", value: "gmt_zone" },
        { text: "Tecnologia", value: "technologies" },
      ],
      toUpdate: [],
    };
  },
  created() {
    getUsers().then((res) => {
      this.allUsers = res;
    });
  },
  methods: {
    handleRowClick(e) {
      this.$router.push(this.$route.path + "/" + e.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 49%;
  min-height: 410px;
}
</style>
