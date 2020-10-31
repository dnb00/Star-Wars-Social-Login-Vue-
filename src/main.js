import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/routes";

import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import "@/assets/css/loader.css";
import "@/assets/css/buttons.css";

createApp(App).use(router).mount("#app");
