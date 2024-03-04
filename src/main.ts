import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入 ant-design-vue 组件库图标
import type { Component } from 'vue'
import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
    
// 注册图标组件
const IconData: Record<string, Component> = Icons
Object.keys(IconData).forEach((key: string) => {
    app.component(key, IconData[key]);
})

app.mount('#app')
