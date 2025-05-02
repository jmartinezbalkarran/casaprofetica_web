import { createApp } from 'vue';
import { createPinia } from 'pinia'//import pinia
import App from './App.vue';
import './style.css'
import router from './router/rMember.js'; // Importa el enrutador

const pinia = createPinia() 

const app = createApp(App);

app.use(pinia)
app.use(router); // Usa el enrutador
app.mount('#app');