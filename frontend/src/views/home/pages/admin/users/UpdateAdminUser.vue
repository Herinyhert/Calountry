
<template>
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

    <v-btn
      color="success"
      class="mr-4"
      @click="handleSignUp"
    >
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
  </v-form>
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
      // if(this.checkValidations() == false){
      //   return(
      //     alert("Campos incorrectos")
      //   )
      // }
      try {
        const newUpDate = { ...this.form };
        upDateUser(this.form.id, newUpDate)
      } catch (error) {
        alert(error)
      }
    },
    // checkValidationsAll() {
    //   if (this.checkValidations() == false) return false;
    //   if (this.StepValidation() == false) return false;
    //   return true;
    // },
    // checkValidations() {
    //   if (this.user_name.length < 3) return false;
    //   if (this.name.length < 3) return false;
    //   if (this.last_name.length < 3) return false;
    //   if (this.country.length < 3) return false;
    //   if (this.gmt_zone.length < 3) return false;
    //   if (this.technologies.length < 3) return false;
    //   if (this.email.includes("@") == false) return false;
    //   return true;
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>