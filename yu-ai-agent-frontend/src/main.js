import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './stores'
import { createHead } from '@vueuse/head'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './styles/index.scss'

// 创建应用实例
const app = createApp(App)

// 创建 head 管理
const head = createHead()

// 配置 Toast
const toastOptions = {
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
}

// 注册插件
app.use(router)
app.use(pinia)
app.use(head)
app.use(ElementPlus)
app.use(Toast, toastOptions)

// 挂载应用
app.mount('#app')
