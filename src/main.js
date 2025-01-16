// import './assets/main.css'

import { createApp } from 'vue'
import App from './app-todoList.vue' // app 컴포넌트 인식
//import ItemList from './components/ItemList.vue'//ItemList 정보 
import PropsExam from './components/PropsExam.vue';

const app = createApp(App)

//app.component('item-list', ItemList);
app.component('props-exam', PropsExam);


app.mount('#app')
