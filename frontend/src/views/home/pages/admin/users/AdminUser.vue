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
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "País", value: "country" },
        { text: "Correo", value: "email" },
        { text: "Tecnologia", value: "tecnology" },
      ],
      toUpdate: [],
    };
  },
  created() {
      getUsers().then((res) => {
        this.allUsers = res;
        console.log("quiero saber si estas aqui",this.allUsers);
        });
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 49%;
  min-height: 410px;
}
</style>
