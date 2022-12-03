<template>
  <div>
    <div class="d-flex align-center mx-5 mt-5">
      <p class="mx-2" v-for="route in items" :key="route?.name">
        <RouterLink :class="this?.active" :to="route?.href">
          {{ route?.text.length > 30 ? "edit" : route?.text }}
        </RouterLink>
      </p>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data: () => ({
    items: [{ text: "", href: "" }],
    active: "active",
    otro: [],
  }),
  watch: {
    "$route.path"() {
      const rutas = this.$route.path.slice(1).split("/");
      this.otro = rutas;
      let acc = "";
      this.items = this.otro.map((x) => {
        acc = acc + "/" + x;
        return { text: x, disabled: false, href: acc };
      });
    },
  },
  created() {
    const rutas = this.$route.path.slice(1).split("/");
    this.otro = rutas;
    let acc = "";
    this.items = this.otro.map((x) => {
      acc = acc + "/" + x;
      return { text: x, disabled: false, href: acc };
    });
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: rgb(241, 159, 159);
  padding: 5px;
  border-radius: 5px;
  color: white;
}
a {
  text-decoration: none;
}
</style>
