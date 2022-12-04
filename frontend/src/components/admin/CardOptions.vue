<template>
  <RouterLink :to="this.$route.path + '/' + this.ops.href" class="link">
    <v-card :class="`mt-2 mx-2 ${this.ops.color}`" min-width="300" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline white--text">{{ this.ops.name }}</div>
          <v-list-item-title class="text-h8 white--text">
            Mantenimiento de {{ this.ops.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "CardOption",
  props: ["ops"],
  components: { RouterLink },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
</style>
