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
        path: "/",
        name: "user",
        component: function () {
          return import("../views/home/pages/UserView.vue");
        },
      },
      {
        path: "admin",
        name: "user",
        component: function () {
          return import("../views/home/pages/AdminView.vue");
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
    path: "/detail/:id",
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
