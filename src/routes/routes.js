import { createWebHistory, createRouter } from "vue-router";

// import Login from "@/views/Login";
// import SignUp from "@/views/SignUp";
import Home from "@/views/Home";
import Details from "@/views/Details";
import Login from "@/views/Login";

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
  // {
  //   path: "/signup",
  //   name: "SignUp",
  //   component: SignUp,
  // },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/login", "/signup"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (authRequired && !loggedIn) {
//     return next("/login");
//   }
//   next();
// });

export default router;
