<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 blue--text text--accent-3">
                      Sign in to Calountry
                    </h1>
                    <div class="text-center" mt-4>
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
                    <h4 class="text-center mlt-4">
                      Ensure your email for registration
                    </h4>
                    <v-form>
                      <v-text-field
                        v-model="user_name"
                        label="Username"
                        name="Username"
                        prepend-icon="person"
                        type="text"
                        color="blue accent-3"
                        :error-messages="errorMessages"
                      />
                      <v-text-field
                        v-model="password"
                        id="password"
                        label="Password"
                        name="Password"
                        prepend-icon="lock"
                        :type="showPass ? 'text' : 'password'"
                        color="blue accent-3"
                        :error-messages="errorMessages"
                      />
                    </v-form>
                    <v-checkbox
                      v-model="showPass"
                      label="show password"
                    ></v-checkbox>
                    <h3 class="text-center mt-3">Forget your password ?</h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn
                      rounded
                      color="blue accent-3"
                      @click="handleLogin"
                      dark
                    >
                      SIGN IN
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="blue accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Hello, Friends !</h1>
                    <h5 class="text-center">
                      Enter your personnel details and start journay with us
                    </h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined="" darck @click="$emit('signup')"
                      >SIGN UP</v-btn
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
import { mapActions } from "vuex";

export default {
  data: () => ({
    user_name: "",
    password: "",
    showPass: false,
    errorMessages: "",
  }),
  props: {
    source: String,
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async handleLogin() {
      const { user_name, password } = this;
      try {
        await this.login({ user_name, password });
        this.$router.push("/home");
      } catch (error) {
        this.errorMessages = error;
        setTimeout(() => (this.errorMessages = ""), 1800);
      }
    },
  },
};
</script>
