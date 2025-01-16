<template>
    <div>
        <slot-com></slot-com>
    </div>
  </template>
  
  <script>
  // 컴포넌트 지역화
  // 원하는 컴포넌트에 선언함으로써 지역화를 진행.
    // import CompOne from './components/CompOne.vue'

    // export default{
    //     components:{
    //         'comp-one' : CompOne
    //     }
    // }
  </script>
  
  <style>
    p {
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
    }
  </style>   