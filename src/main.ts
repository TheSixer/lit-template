import { createApp } from 'vue'
import App from './App.vue'
import { components, plugins } from './components'
import store from '@/stores'
import router from '@/router'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// 加载全局组件
components.forEach((component) => {
  console.log(component);
  app.component(component.name, component);
});

// 加载全局插件
plugins.forEach((plugin) => {
  app.use(plugin);
});