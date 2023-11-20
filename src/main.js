import { createApp } from 'vue';
import components from '@/components/UI/index.js';
import '@/assets/styles/index.scss';
import App from './App.vue'

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

// Mount vue app
app.mount('#app');
