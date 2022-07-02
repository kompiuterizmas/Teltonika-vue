import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/main.css';
import { makeServer } from "./server"

createApp(App).use(store).use(router).mount("#app");
if (process.env.NODE_ENV === "development"){
    makeServer()
}