import './assets/main.css'

import { createApp, createSSRApp } from 'vue'
import App from './App.vue'

if (window.location.pathname !== '/') {
  window.location.replace('/' + window.location.search + window.location.hash)
} else {
  const app = document.querySelector('#app')?.hasChildNodes() ? createSSRApp(App) : createApp(App)
  app.mount('#app')
}
