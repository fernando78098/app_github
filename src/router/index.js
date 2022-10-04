import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'




const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import('../views/Users.vue'),
  },
  {
    path: "/profile/:name",
    name: "Profile",
    component: () => import('../views/Profile.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;