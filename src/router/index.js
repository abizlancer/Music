import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Manage from "../views/Manage.vue";
import Song from "../views/Song.vue";
import useUserStore from "../stores/user";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    // alias: '/manage'
    path: "/manage-music",
    component: Manage,
    beforeEach: () => {
      console.log('Manage Route Guard');
      next();
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    name: "song",
    path: "/song/:id",
    component: Song
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  console.log("Global Guard");
  
  if(!to.meta.requiresAuth) {
    next();
    return;
  }
  
  
  const store = useUserStore();
  if(store.userLoggedIn) {
    next()
  } else {
    next({ name: "home" })
  }
})

export default router;
