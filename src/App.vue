<template>

  <div id="app">
    <slot-comp>
      <template v-slot:header>
        <h1>슬롯이 정상적으로 적용되면 이게 나오겠지</h1>
      </template>
      <h2>이건 어디서 어떻게 사용하는지?</h2>
      <template v-slot:footer>
        <h1>footer 정의</h1>
      </template>
    </slot-comp>
  </div>

</template>
  
  <script>
  import SlotComp from './components/SlotComp.vue';
  export default{
    name: 'App',
    components:{
      SlotComp
    }
  }

  // 컴포넌트 지역화
  // 원하는 컴포넌트에 선언함으로써 지역화를 진행.
    // import CompOne from './components/CompOne.vue'

    // export default{
    //     components:{
    //         'comp-one' : CompOne
    //     }
    // }
  </script>
  
  <style scoped>


    /* p {
      width: 200px;
    }
    #app div {
      border: dashed black 1px;
      margin: 10px;
      padding: 10px;
      display: inline-block;
    }
    .compOneDiv {
      background-color: lightgreen;
    }
    .compTwoDiv {
      background-color: lightcoral;
    } */
  </style>   