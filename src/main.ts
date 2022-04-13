import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { store } from "./store/store";
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core";

createApp(App).use(router).use(store).use(VueAnimXyz).mount('#app')