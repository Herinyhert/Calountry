<template>
  <div class="d-flex flex-wrap justify-center my-5">
    <CardOptions v-for="ops in this.options" :key="ops.name" :ops="ops" />
  </div>
</template>

<script>
import CardOptions from "@/components/admin/CardOptions.vue";

export default {
  components: { CardOptions },
  data: () => ({
    options: [
      { name: "Grupos", color: "red lighten-3", href: "groups" },
      { name: "Usuarios", color: "blue accent-2", href: "users" },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
