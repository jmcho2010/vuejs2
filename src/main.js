// import './assets/main.css'

import { createApp } from 'vue'
import App from './app.vue' // app 컴포넌트 인식
//import ItemList from './components/ItemList.vue'//ItemList 정보 
//import PropsExam from './components/PropsExam.vue';
import SlotComp from './components/SlotComp.vue';


// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'
const app = createApp(App)
app.component('slot-com', SlotComp);

//app.component('item-list', ItemList);
//app.component('props-exam', PropsExam);
// app.component('comp-one', CompOne)
// app.component('comp-two', CompTwo)

app.mount('#app')
