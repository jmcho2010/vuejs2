// import './assets/main.css'

import { createApp } from 'vue'
//import App from './app.vue' // app 컴포넌트 인식
//import App from './appQuiz.vue';
//import App from './app-Teleport.vue'
//import App from './app-Http.vue'
import App from './app-LifeCycle.vue'
//import tel from './teleport/Tel.vue'
//import ItemList from './components/ItemList.vue'//ItemList 정보 
//import PropsExam from './components/PropsExam.vue';
// import SlotComp from './components/SlotComp.vue';
//import lifeCycle1 from './components/beforeCreate.vue'
import lifeCycle2 from './components/beforeMount.vue'
// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'
const app = createApp(App)
app.component('comp-one', lifeCycle2)
//app.component('comp-one', lifeCycle1)
//app.component('tel', tel);
//app.component('slot-comp', SlotComp);

//app.component('item-list', ItemList);
//app.component('props-exam', PropsExam);
//app.component('comp-one', CompOne)
//app.component('comp-two', CompTwo)

app.mount('#app')
