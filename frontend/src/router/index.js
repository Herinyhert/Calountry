import Vue from "vue";
import store from "@/store/index";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import { ROLE } from "@/constants/index";
/* eslint-disable */
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: HomeView,
    meta: [],
    children: [
      {
        path: "/",
        name: "home",
        meta: [],
        component: function () {
          return import("../views/home/pages/UserView.vue");
        },
      },
      {
        path: "admin",
        name: "admin",
        meta: [ROLE.ADMIN],
        component: function () {
          return import("../views/home/pages/admin/AdminView.vue");
        },
        children: [
          {
            path: "",
            name: "adminoptions",
            meta: [ROLE.ADMIN],
            component: function () {
              return import("../views/home/pages/admin/AdminOptions.vue");
            },
          },
          {
            path: "groups",
            name: "admingroup",
            meta: [ROLE.ADMIN],
            component: function () {
              return import("../views/home/pages/admin/AdminGruop.vue");
            },
          },
        ],
      },
    ],
  },

  {
    path: "/",
    name: "login",
    meta: [],
    component: function () {
      return import("../views/LoginView.vue");
    },
  },
  {
    path: "/detail/:id",
    name: "groupDetail",
    meta: [],
    component: function () {
      return import("../components/groups/DetailGroup.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes,
});

router.afterEach((to) => {
  const { meta } = to;
  const userRole = store.state.auth.profile.role;
  if (to.path.match(/admin/) && meta.includes(userRole) == false) {
    router.replace("/home");
  }
});

export default router;
