import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App.vue'
import './index.css'

console.log('yoooooooooooooooooo')

createApp(App).use(router).use(store).mount('#app')
