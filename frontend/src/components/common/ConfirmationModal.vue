<template>
  <v-dialog v-model="this.modals.deleteGroupModal" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Eliminar {{ this.name }} </v-card-title>
      <v-card-text>
        Estas a punto de eliminar este grupo deseas continuar?
      </v-card-text>
      <v-card-actions class="">
        <v-btn
          class="red lighten-2"
          color="white"
          text
          @click="() => this.$emit('action', true)"
        >
          Eliminar
        </v-btn>
        <v-btn class="gray darken-1" @click="() => this.$emit('action', false)">
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ConfirmationModal",
  props: ["name"],
  computed: {
    ...mapState(["modals"]),
  },
};
</script>

<style lang="scss" scoped></style>
