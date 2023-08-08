import './assets/css/reset.scss'
import './assets/css/globals.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'

import App from './App.vue'

createApp(App).use(router).use(createPinia()).mount('#app')
