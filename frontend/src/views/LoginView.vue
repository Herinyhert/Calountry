<template>
  <div>
    <v-window v-model="form">
      <v-window-item :value="1">
        <login-form @signup="form = 2" />
      </v-window-item>
      <v-window-item :value="2">
        <RegisterForm @sigin="form = 1" />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import RegisterForm from "@/components/login/RegisterForm.vue";
import LoginForm from "../components/login/LoginForm.vue";
export default {
  data: () => ({
    form: 1,
  }),
  components: { LoginForm, RegisterForm },
};
</script>

<style lang="scss" scoped></style>
