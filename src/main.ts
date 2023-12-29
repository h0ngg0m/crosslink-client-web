import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/scss/common/index.scss'
import 'element-tiptap-vue3-fixed/lib/style.css'
import 'element-plus/dist/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import ElementTiptapPlugin from 'element-tiptap'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

app.use(ElementPlus)
app.use(ElementTiptapPlugin)
app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
