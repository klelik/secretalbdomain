import './assets/main.css'

import { createApp, createSSRApp } from 'vue'
import App from './App.vue'

const app = document.querySelector('#app')?.hasChildNodes() ? createSSRApp(App) : createApp(App)

app.mount('#app')
