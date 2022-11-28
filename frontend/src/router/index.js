import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "group",
        name: "group",
        component: function () {
          return import("../views/LoginView.vue");
        },
      },
    ],
  },

  {
    path: "/",
    name: "login",

    component: function () {
      return import("../views/LoginView.vue");
    },
  },
  {
    path: "/detail",
    name: "groupDetail",

    component: function () {
      return import("../components/groups/DetailGroup.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
