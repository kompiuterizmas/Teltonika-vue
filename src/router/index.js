import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddUserForm from "../views/AddUserForm.vue";
import AddCategory from "../views/AddCategory.vue";
import UserView from "../views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/adduser",
    name: "adduser",
    component: AddUserForm,
  },
  {
    path: "/addcategory",
    name: "addcategory",
    component: AddCategory,
  },
  {
    path: "/category:id",
    name: "userview",
    component: UserView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
