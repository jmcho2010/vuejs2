// import './assets/main.css'

import { createApp } from 'vue'
import App from './app.vue' // app 컴포넌트 인식
//import ItemList from './components/ItemList.vue'//ItemList 정보 


const app = createApp(App)

//app.component('item-list', ItemList);

app.mount('#app')