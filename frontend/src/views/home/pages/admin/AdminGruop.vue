<template>
  <div class="px-5">
    <v-alert dense text type="success" v-model="groupCreated" class="alert"
      ><strong>Creado</strong>
    </v-alert>
    <v-alert dense text type="success" v-model="groupDeleted" class="alert"
      ><strong>Eliminado</strong>
    </v-alert>
    <v-alert dense text type="error" v-model="isError" class="alert"
      ><strong>Error</strong>
    </v-alert>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      :loading="isloading"
      class="elevation-1 my-5"
      @click:row="handleRowClick"
    >
      <template v-slot:[`item.created_at`]="{ item }">
        <span>{{ item.created_at | date }}</span>
      </template>
    </v-data-table>
    <ModalRegister @success="handleSuccess"></ModalRegister>
  </div>
</template>

<script>
import ModalRegister from "@/components/groups/ModalRegister.vue";
import { getAllGroups } from "@/services/group/group";

export default {
  /* eslint-disable */
  name: "AdminGroup",
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Creacion", value: "created_at" },
        { text: "Inicio", value: "start_date" },
        { text: "Fin", value: "end_date" },
      ],
      data: [],
      isloading: true,
      groupCreated: false,
      groupDeleted: false,
      isError: false,
    };
  },
  created() {
    getAllGroups().then((res) => {
      this.isloading = false;
      this.data = res;
    });
  },
  components: { ModalRegister },
  methods: {
    handleRowClick(e) {
      this.$router.push(this.$route.path + "/" + e.id);
    },
    handleSuccess() {
      this.groupCreated = true;
      setTimeout(() => {
        this.groupCreated = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 10px;
  width: 150px;
}
</style>
