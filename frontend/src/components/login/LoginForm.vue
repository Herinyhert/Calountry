<template>
  <div>
    <v-card>
      <v-card-title> iniciar seccion </v-card-title>
      <v-card-text>
        <v-text-field label="label" v-model="data"></v-text-field>
      </v-card-text>
      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      data: " ",
    };
  },
};
</script>

<style lang="scss" scoped></style>
