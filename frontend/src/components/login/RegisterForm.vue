<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="4" class="teal accent-3">
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
                    <h1 class="text-center display-2 teal--text text--accent-3">
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
                            label="Name"
                            value=""
                            prepend-icon="account_circle"
                          ></v-text-field>
                          <v-text-field
                            label="Last name"
                            value=""
                            prepend-icon="account_circle"
                          ></v-text-field>
                          <v-text-field
                            label="Username"
                            value=""
                            prepend-icon="account_circle"
                          ></v-text-field>
                        </v-card-text>
                      </v-window-item>

                      <v-window-item :value="2">
                        <v-card-text>
                          <v-text-field
                            label="Email"
                            :type="email"
                            prepend-icon="email"
                          ></v-text-field>
                          <v-text-field
                            label="Password"
                            :type="showPass ? 'text' : 'password'"
                            prepend-icon="lock"
                          ></v-text-field>
                          <v-text-field
                            label="Confirm Password"
                            :type="showPass ? 'text' : 'password'"
                            prepend-icon="lock"
                          ></v-text-field>
                          <v-checkbox
                            v-model="showPass"
                            label="show password"
                          ></v-checkbox>
                        </v-card-text>
                      </v-window-item>

                      <v-window-item :value="3">
                        <div class="pa-4 text-center">
                          <v-img
                            class="mb-4"
                            contain
                            height="128"
                            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                          ></v-img>
                          <h3 class="text-h6 font-weight-light mb-2">
                            Welcome to Vuetify
                          </h3>
                          <span class="text-caption grey--text"
                            >Thanks for signing up!</span
                          >
                        </div>
                      </v-window-item>
                    </v-window>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn rounded color="teal accent-3" @click="step++" dark
                      >Next</v-btn
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
export default {
  data: () => ({
    step: 0,
    showPass: false,
  }),
};
</script>

<style lang="scss" scoped></style>
