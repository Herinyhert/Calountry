<template>
  <div>
    <v-dialog
      v-model="modals.createGroupModal"
      scrollable
      persistent
      :overlay="false"
      width="500"
      transition="dialog-transition"
    >
      <RegisterGroup
        :group="{
          name: this.name,
          start_date: this.start_date,
          end_date: this.end_date,
        }"
        btn-text="Guardar"
        @start:date="(date) => (this.start_date = date)"
        @end:date="(date) => (this.end_date = date)"
        @name="(name) => (this.name = name)"
        @register:submit="handleCreate"
      >
        <template v-slot:footer>
          <v-alert dense text type="error" v-model="isError" class="alert"
            ><strong>{{ errorMesage }}</strong>
          </v-alert>
          <v-btn class="mr-4" @click="setFalse"> Cerrar </v-btn>
        </template>
      </RegisterGroup>
    </v-dialog>
  </div>
</template>
<script>
import { createGroup } from "@/services/group/group";
import { mapMutations, mapState } from "vuex";
import RegisterGroup from "./RegisterGroup.vue";

export default {
  name: "ModalRgister",
  data() {
    return {
      name: "",
      start_date: "",
      end_date: "",
      users: [],
      isError: false,
      errorMesage: "",
    };
  },
  computed: {
    ...mapState(["modals"]),
  },
  methods: {
    ...mapMutations({
      setFalse: "modals/setFalse",
    }),
    async handleCreate() {
      const { name, start_date, end_date, users } = this;
      if (this.areInputsEmpty()) {
        this.errorMesage = "Can not be empty";
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 1000);
        return;
      }
      try {
        await createGroup({ name, start_date, end_date, users });
        this.setFalse();
        this.cleanInputs();
        this.$emit("success");
      } catch (error) {
        this.errorMesage = "Request Error";
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 1000);
      }
    },
    cleanInputs() {
      const items = ["name", "start_date", "end_date"];
      for (const item of items) {
        this[item] = "";
      }
    },
    areInputsEmpty() {
      if (!this.name || !this.start_date || !this.end_date) {
        return true;
      }
    },
  },
  components: { RegisterGroup },
};
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  bottom: 20px;
  right: 20px;
  margin: auto;
}
</style>
