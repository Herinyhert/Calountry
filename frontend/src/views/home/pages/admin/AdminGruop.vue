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
      :items-per-page="15"
      :loading="isloading"
      class="elevation-1 my-5"
      @click:row="handleRowClick"
    >
      <template v-slot:[`item.created_at`]="{ item }">
        <span>{{ item.created_at | date }}</span>
      </template>

      <template v-slot:[`item.delete`]="{ item }">
        <v-btn @click="(e) => canIDelete(item, e)" icon color="red">
          <v-icon>close</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <ModalRegister @success="handleSuccess"></ModalRegister>
    <ConfirmationModal
      :name="this.groupToDelete.name"
      @action="handleModelDelete"
    ></ConfirmationModal>
  </div>
</template>

<script>
import ConfirmationModal from "@/components/common/ConfirmationModal.vue";
import ModalRegister from "@/components/groups/ModalRegister.vue";
import { deleteGroup, getAllGroups } from "@/services/group/group";
import { mapMutations } from "vuex";
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
        //{ text: "Creacion", value: "created_at" },
        { text: "Inicio", value: "start_date" },
        { text: "Fin", value: "end_date" },
        { text: "Delete", value: "delete" },
      ],
      data: [],
      isloading: true,
      groupCreated: false,
      groupDeleted: false,
      isError: false,
      idToDelete: "",
      canDelete: false,
      groupToDelete: {},
    };
  },
  created() {
    getAllGroups().then((res) => {
      this.isloading = false;
      this.data = res;
    });
  },
  components: { ModalRegister, ConfirmationModal },
  methods: {
    ...mapMutations({
      setTrueDelete: "modals/setTrueDelete",
      setFalse: "modals/setFalseDelete",
    }),
    handleRowClick(e) {
      this.$router.push(this.$route.path + "/" + e.id);
    },
    handleSuccess() {
      this.groupCreated = true;
      getAllGroups().then((res) => {
        this.isloading = false;
        this.data = res;
      });
      setTimeout(() => {
        this.groupCreated = false;
      }, 1000);
    },
    canIDelete(item, e) {
      e.cancelBubble = true;
      this.groupToDelete = item;
      this.setTrueDelete();
    },
    handleModelDelete(option) {
      if (option == false) {
        this.setFalse();
        return;
      }
      deleteGroup(this.groupToDelete.id).then((res) => {
        if (!res.data) {
          this.isError = true;
          setTimeout(() => (this.isError = false), 1000);
          return;
        }
        this.groupDeleted = true;
        setTimeout(() => (this.groupDeleted = false), 1000);
        getAllGroups().then((res) => {
          this.isloading = false;
          this.data = res;
        });
      });
      this.setFalse();
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
