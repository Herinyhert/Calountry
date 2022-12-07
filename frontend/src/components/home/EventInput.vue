<template>
  <div class="text-center">
    <v-dialog
      scrollable
      persistent
      :overlay="false"
      width="500"
      transition="dialog-transition"
      v-model="this.modals.eventModal"
    >
      <v-card>
        <form class="px-5 py-5">
          <v-text-field
            name=""
            label="Name"
            v-model="eName"
            id="id"
          ></v-text-field>
          <v-textarea
            solo
            v-model="eDescription"
            name="input-7-4"
            label="Descripcion"
          ></v-textarea>
        </form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" v-if="this.delete" text @click="handleDelete">
            Delete
          </v-btn>
          <v-btn color="primary" v-if="!this.delete" text @click="handleSave">
            Save
          </v-btn>
          <v-btn color="primary" text @click="handleClose"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
>

<script>
import { mapMutations, mapState } from "vuex";
import { deleteEvent } from "@/services/events/events";
export default {
  props: ["delete"],
  data() {
    return {
      name: "",
      description: "",
    };
  },

  computed: {
    ...mapState(["modals"]),

    eName: {
      get() {
        return this.modals.eName;
      },
      set(val) {
        this.setName(val);
      },
    },

    eDescription: {
      get() {
        return this.modals.eDescription;
      },
      set(val) {
        this.setDescription(val);
      },
    },
  },
  methods: {
    ...mapMutations({
      setEvent: "modals/setEvent",
      setEventValues: "modals/setEventValues",
      setName: "modals/setName",
      setDescription: "modals/setDescription",
    }),
    handleClose() {
      this.name = "";
      this.description = "";
      this.setEvent(false);
      this.setEventValues({ name: "", description: "", id: "" });
    },
    async handleDelete() {
      this.name = "";
      this.description = "";
      //
      try {
        await deleteEvent(this.modals.eID);
        this.setEvent(false);
        this.setEventValues({ name: "", description: "", id: "" });
        this.$emit("save:event", { action: "delete" });
      } catch (error) {
        this.$emit("save:event", { action: "delete" });
      }
    },
    handleSave() {
      this.$emit("save:event", {
        name: this.eName,
        description: this.eDescription,
        action: "save",
      });
      this.setEventValues({ name: "", description: "", id: "" });
      this.setEvent(false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
