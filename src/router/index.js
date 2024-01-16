import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import memories from "../Pages/memory.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/memories",
    name: "Memories",
    component: memories,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
