<template>
  <div>
    <!-- <v-alert dense text type="click" v-model="isError" class="alert"
      ><strong>Verifica los campos, datos incorrectos</strong>
    </v-alert>
    <v-alert dense text type="click" v-model="update" class="alert"
      ><strong>Datos Actualizados</strong>
    </v-alert> -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="form.name"
        label="Name"
        value=""
        prepend-icon="account_circle"
      ></v-text-field>
      <v-text-field
        v-model="form.last_name"
        label="Last name"
        value=""
        prepend-icon="account_circle"
      ></v-text-field>
      <v-text-field
        v-model="form.user_name"
        label="Username"
        value=""
        prepend-icon="account_circle"
      ></v-text-field>
      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        prepend-icon="email"
      ></v-text-field>
      <v-text-field
        v-model="form.country"
        label="Country"
        type="text"
        prepend-icon="public"
      ></v-text-field>
      <v-text-field
        v-model="form.gmt_zone"
        label="GMT Zone"
        type="text"
        prepend-icon="schedule"
      ></v-text-field>
      <v-text-field
        v-model="form.phone_number"
        label="Phone Number"
        type="text"
        prepend-icon="call"
      ></v-text-field>
      <v-text-field
        v-model="form.technologies"
        label="Technologies"
        type="text"
        placeholder="html, css, js"
        prepend-icon="code"
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="handleSignUp">
        Validate
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { getDetailUser, upDateUser } from "@/services/user/user";

export default {
  data() {
    return {
      dataDetailUser: {},
      form: {
        id: "",
        name: "",
        last_name: "",
        user_name: "",
        email: "",
        country: "",
        gmt_zone: "",
        phone_number: "",
        isActive: "",
        role: "",
        technologies: "",
      },
    };
  },
  mounted() {
    const id = this.$route.params.id;
    getDetailUser(id).then((res) => {
      this.form = res;
    });
  },
  methods: {
    async handleSignUp() {
      if (this.checkValidations() == false) {
        return alert("Verifica los campos, datos incorrectos");
        // this.isError = true;
        // setTimeout(() => (this.isError = false), 1000);
        // return;
      }
      try {
        // this.update = true;
        const newUpDate = { ...this.form };
        upDateUser(this.form.id, newUpDate);
        // setTimeout(() => {
        //   this.update = false;
        // }, 1000);
        alert("Actualizado")
      } catch (error) {
        console.log(error);
      }
    },
    checkValidations() {
      if (this.form.user_name.length < 3) return false;
      if (this.form.name.length < 3) return false;
      if (this.form.last_name.length < 3) return false;
      if (this.form.country.length < 3) return false;
      if (this.form.gmt_zone.length < 3) return false;
      if (this.form.technologies.length < 3) return false;
      if (this.form.email.includes("@") == false) return false;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>