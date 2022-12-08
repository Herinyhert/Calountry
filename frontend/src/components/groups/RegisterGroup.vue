<template>
  <v-card>
    <form @submit.prevent="handleCreate" class="py-6 px-6">
      <v-text-field
        @input="(name) => this.$emit('name', name)"
        :value="this.group.name"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        @input="(date) => this.$emit('start:date', date)"
        :value="this.group.start_date"
        label="Fecha de inicio"
        required
        type="date"
      ></v-text-field>
      <v-text-field
        @input="(date) => this.$emit('end:date', date)"
        :value="this.group.end_date"
        label="Fecha de fin"
        required
        type="date"
      ></v-text-field>
      <slot name="footer"></slot>
      <v-btn class="mr-4" @click="handleCreate"> {{ btnText }} </v-btn>
    </form>
  </v-card>
</template>
<script>
export default {
  name: "RegisterGroup",
  props: ["group", "btnText"],
  methods: {
    handleCreate() {
      this.$emit("register:submit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
