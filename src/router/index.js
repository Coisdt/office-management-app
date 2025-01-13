import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/office-details",
    name: "OfficeDetails",
    component: () => import("../views/OfficeDetails.vue"),
  },
  {
    path: "/add-office",
    name: "AddOffice",
    component: () => import("../views/AddOffice.vue"),
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
