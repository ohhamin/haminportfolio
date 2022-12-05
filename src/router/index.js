import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/project",
    name: "project",
    component: () =>
      import(
        /* webpackChunkName: "project" */ "../components/ProjectComponent.vue"
      ),
  },
  {
    path: "/project/tymiroom",
    name: "tymiroom",
    component: () =>
      import(/* webpackChunkName: "project" */ "../components/TymiRoom.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
