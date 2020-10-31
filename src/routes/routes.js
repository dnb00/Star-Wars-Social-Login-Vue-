import { createWebHistory, createRouter } from "vue-router";

// import Login from "@/views/Login";
// import SignUp from "@/views/SignUp";
import Home from "@/views/Home";
import Details from "@/views/Details";
import Login from "@/views/Login";
import List from "@/views/List";

let routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isAuthenticated = localStorage.getItem("loginUser");

router.beforeEach((to, from, next) => {
  const publicPage = "/login";
  const authRequired = !publicPage.includes(to.path);

  if (authRequired && !isAuthenticated) {
    return next("/login");
  }

  next();
});

export default router;
