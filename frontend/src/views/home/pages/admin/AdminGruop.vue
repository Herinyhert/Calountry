<template>
  <div class="px-5">
    <template>
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="5"
        class="elevation-1 my-5"
      >
      </v-data-table>
    </template>
    <RegisterGroup></RegisterGroup>
  </div>
</template>

<script>
import RegisterGroup from "@/components/groups/RegisterGroup.vue";
import { getAllGroups } from "@/services/group/group";

export default {
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
    };
  },
  created() {
    getAllGroups().then((res) => (this.data = res));
  },
  components: { RegisterGroup },
};
</script>

<style lang="scss" scoped></style>
