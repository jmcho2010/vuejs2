// import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
//import App from './app.vue' // app 컴포넌트 인식
//import App from './appQuiz.vue';
//import App from './app-Teleport.vue'
//import App from './app-Http.vue'
//import App from './app-LifeCycle.vue'
//import App from './app-routing.vue'
//import App from './app-animation2.vue'
import App from './app-animationGroup.vue'
//import tel from './teleport/Tel.vue'
//import ItemList from './components/ItemList.vue'//ItemList 정보 
//import PropsExam from './components/PropsExam.vue';
// import SlotComp from './components/SlotComp.vue';
//import lifeCycle1 from './components/beforeCreate.vue'
//import lifeCycle2 from './components/beforeMount.vue'
//import lifeCycle3 from './components/beforeUpdate.vue'
//import lifeCycle4 from './components/beforeDelete.vue'
//import lifeCycle5 from './components/render.vue'
// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'
// import FoodItems from './route/FoodItems.vue'
// import Collections from './route/Collections.vue'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {path: '/food', component: FoodItems},
//         {path:'/animals', component: Collections},
//     ]
// });




const app = createApp(App)
//app.use(router);
//app.component('comp-one', lifeCycle2)
//app.component('comp-one', lifeCycle4)
//app.component('comp-one', lifeCycle5)
//app.component('comp-one', lifeCycle3)
//app.component('comp-one', lifeCycle1)
//app.component('tel', tel);
//app.component('slot-comp', SlotComp);

//app.component('item-list', ItemList);
//app.component('props-exam', PropsExam);
//app.component('comp-one', CompOne)
//app.component('comp-two', CompTwo)

app.mount('#app')
