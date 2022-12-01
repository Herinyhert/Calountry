<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="4" class="blue accent-3">
                  <v-card-text class="white--text me-12">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <h5 class="text-center">
                      To keepconnected with us please login with your personnel
                      info
                    </h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="$emit('sigin')"
                      >SIGN IN</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 blue--text text--accent-3">
                      Create Account
                    </h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">
                      Ensure your email for registration
                    </h4>
                    <v-window v-model="step">
                      <v-window-item :value="1">
                        <v-card-text>
                          <v-text-field
                            v-model="name"
                            label="Name"
                            value=""
                            prepend-icon="account_circle"
                          ></v-text-field>
                          <v-text-field
                            v-model="last_name"
                            label="Last name"
                            value=""
                            prepend-icon="account_circle"
                          ></v-text-field>
                          <v-text-field
                            v-model="user_name"
                            label="Username"
                            value=""
                            prepend-icon="account_circle"
                          ></v-text-field>
                        </v-card-text>
                      </v-window-item>

                      <v-window-item :value="2">
                        <v-card-text>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            type="email"
                            prepend-icon="email"
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            label="Password"
                            :type="showPass ? 'text' : 'password'"
                            @blur="isValidpassword"
                            @focus="errors.password.message = ''"
                            prepend-icon="lock"
                            :error-messages="errors.password.message"
                          ></v-text-field>
                          <v-text-field
                            v-model="password_confirm"
                            label="Confirm Password"
                            :type="showPass ? 'text' : 'password'"
                            prepend-icon="lock"
                            @focus="errors.password_confirm.message = ''"
                            :error-messages="errors.password_confirm.message"
                          ></v-text-field>
                          <v-checkbox
                            v-model="showPass"
                            label="show password"
                          ></v-checkbox>
                        </v-card-text>
                      </v-window-item>

                      <v-window-item :value="3">
                        <v-card-text>
                          <v-text-field
                            v-model="country"
                            label="Country"
                            type="text"
                            prepend-icon="public"
                          ></v-text-field>
                          <v-text-field
                            v-model="gmt_zone"
                            label="GMT Zone"
                            type="text"
                            prepend-icon="schedule"
                          ></v-text-field>
                          <v-text-field
                            v-model="phone_number"
                            label="Phone Number"
                            type="text"
                            prepend-icon="call"
                          ></v-text-field>
                          <v-text-field
                            v-model="technologies"
                            label="Technologies"
                            type="text"
                            placeholder="html, css, js"
                            prepend-icon="code"
                          ></v-text-field>
                        </v-card-text>
                      </v-window-item>
                    </v-window>
                  </v-card-text>
                  <div
                    class="text-center mt-n5 d-flex px-5 justify-space-between align-content-end"
                  >
                    <v-btn
                      rounded
                      color="blue accent-3"
                      v-if="step > 1"
                      @click="step--"
                      dark
                    >
                      <v-icon>arrow_back</v-icon>
                    </v-btn>
                    <v-btn
                      rounded
                      color="blue accent-3"
                      v-if="step >= 1 && step != 3"
                      @click="nextStep"
                      dark
                    >
                      <v-icon>arrow_forward</v-icon></v-btn
                    >
                    <v-btn
                      rounded
                      color="blue accent-3"
                      v-if="step == 3"
                      @click="handleSignUp"
                      dark
                      >Sign up</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { register } from "@/services/auth/auth";

export default {
  data: () => ({
    step: 1,
    showPass: false,
    name: "",
    last_name: "",
    user_name: "",
    email: "",
    password: "",
    password_confirm: "",
    country: "",
    gmt_zone: "",
    phone_number: "",
    technologies: "",
    errors: {
      password: {
        value:
          "The password must have a Uppercase, lowercase letter and a number'",
        message: "",
      },
      password_confirm: {
        value: "The passwords needs to be equals",
        message: "",
      },
    },
  }),
  methods: {
    async handleSignUp() {
      if (this.checkValidations() == false) return;
      try {
        await register(this.getUser());
        this.$emit("sigin");
      } catch (error) {
        this.errors = error;
      }
    },
    getUser() {
      return {
        name: this.name,
        last_name: this.last_name,
        user_name: this.user_name,
        email: this.email,
        password: this.password,
        country: this.country,
        gmt_zone: this.gmt_zone,
        technologies: this.technologies,
      };
    },
    checkValidations() {
      if (this.step == 1 && this.firsStepValidation() == false) return false;
      if (this.step == 2 && this.secondStepValidation() == false) return false;
      if (this.step == 3 && this.thirdStepValidation() == false) return false;
      return true;
    },
    nextStep() {
      if (this.checkValidations()) this.step++;
    },
    firsStepValidation() {
      if (this.user_name.length < 3) return false;
      if (this.name.length < 3) return false;
      if (this.last_name.length < 3) return false;
      return true;
    },
    secondStepValidation() {
      let bol = true;
      if (this.email.includes("@") == false) bol = false;
      if (this.isValidpassword() == false) bol = false;

      if (this.password !== this.password_confirm) {
        this.errors.password_confirm.message =
          this.errors.password_confirm.value;
        bol = false;
      }

      return bol;
    },

    thirdStepValidation() {
      if (this.country.length < 3) return false;
      if (this.gmt_zone.length < 3) return false;
      if (this.technologies.length < 3) return false;
      return true;
    },
    isValidpassword() {
      const regex = /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      if (!(this.password.match(regex) || []).length) {
        this.errors.password.message = this.errors.password.value;

        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
