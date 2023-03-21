import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

loadFonts()

const app = createApp(App);
const pinia = createPinia()
app.use(router)
app.use(vuetify)
app.use(pinia)
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60
      }
    }
  }
});

app.mount('#app')
