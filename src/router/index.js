import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/office/:id",
    name: "OfficeDetails",
    component: () => import("../views/OfficeDetailsPage.vue"),
    props: true,
  },
  {
    path: "/office/:id?",
    name: "AddOrEditOfficePage",
    component: () => import("../views/AddOrEditOfficePage.vue"),
    props: true,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
