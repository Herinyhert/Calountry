<template>
  <div class="mx-5 my-5">
    <div class="d-flex justify-space-between mb-5">
      <v-data-table
        :headers="headers"
        :items="this.group.users"
        :items-per-page="5"
        class="elevation-1 table"
      >
        <template v-slot:top>
          <p class="px-5 pt-5 blue--text">Usuarios Miembros</p>
        </template>
        <template v-slot:[`item.action`]="{ index }">
          <v-btn @click="removeMember({ index })" icon color="red">
            <v-icon>close</v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <v-data-table
        :headers="headers"
        :items="allUsers"
        :items-per-page="5"
        class="elevation-1 table"
      >
        <template v-slot:top>
          <p class="px-5 pt-5 blue--text">Usuarios Disponibles</p>
        </template>
        <template v-slot:[`item.action`]="{ item, index }">
          <v-btn @click="addNewMember({ item, index })" icon color="green">
            <v-icon>done</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
    <RegisterGroup
      :group="{
        name: this.group.name,
        start_date: this.group.start_date,
        end_date: this.group.end_date,
      }"
      btn-text="Actualizar"
      @start:date="(date) => (this.group.start_date = date)"
      @end:date="(date) => (this.group.end_date = date)"
      @name="(name) => (this.group.name = name)"
      @register:submit="handleSubmit"
    >
      <template v-slot:footer>
        <v-alert dense text type="error" v-model="isError" class="alert"
          ><strong>Error</strong>
        </v-alert>
        <v-alert dense text type="success" v-model="updatedOk" class="alert"
          ><strong>Actualizado</strong>
        </v-alert>
        <v-btn class="mr-4 red lighten-1 white--text"> delete </v-btn>
      </template>
    </RegisterGroup>
  </div>
</template>

<script>
import RegisterGroup from "@/components/groups/RegisterGroup.vue";

import { getDetailGroup, updateGroup } from "@/services/group/group";
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
        { text: "Action", value: "action" },
      ],
      toUpdate: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    getDetailGroup(id)
      .then((res) => {
        this.group = res[0];
      })
      .then(() => {
        getUsers().then((res) => {
          this.allUsers = res.filter((x) => {
            return this.group.users.length
              ? this.group.users.some((y) => x.id != y.id)
              : true;
          });
        });
      });
  },
  watch: {
    "group.users"() {
      this.toUpdate = this.group.users.map((x) => x.id);
    },
  },
  methods: {
    addNewMember({ index }) {
      this.group.users.push(this.allUsers.splice(index, 1)[0]);
    },
    removeMember({ index }) {
      this.allUsers.push(this.group.users.splice(index, 1)[0]);
    },
    async handleSubmit() {
      const group = { ...this.group };
      group.users = this.toUpdate;
      updateGroup(this.group.id, group).then((res) => {
        if (res.group == undefined) {
          {
            this.isError = true;
            setTimeout(() => {
              this.isError = false;
            }, 1000);
          }
          return;
        }

        res.group.end_date = res.group.end_date.split("T")[0];
        res.group.start_date = res.group.start_date.split("T")[0];
        this.group = res.group;
        this.updatedOk = true;

        setTimeout(() => {
          this.updatedOk = false;
        }, 1000);
      });
    },
  },
  components: { RegisterGroup },
};
</script>

<style lang="scss" scoped>
.table {
  width: 49%;
  min-height: 410px;
}
</style>
