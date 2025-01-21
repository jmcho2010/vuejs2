<template>
  <h1>Add/Remove &lt;p&gt; Tag</h1>
  <button @click="this.exists = !this.exists">{{btnText}}</button><br>
  <Transition>
    <p v-if="exists">Hello World!</p>
  </Transition>
</template>
  
  <script>
  export default {
    data() {
      return {
        exists: false
      }
    },
    computed: {
      btnText() {
        if(this.exists) {
          return 'Remove';
        }
        else {
          return 'Add';
        }
      }
    }
  }
  </script>
  
  <style>
/* 애니메이션 속성 활용하기*/ 
  .v-enter-active{
    background-color: lightgreen;
    animation: added 1s;
  }
  .v-leave-active{
    background-color: crimson;
    animation: added 1s;
  }
  @keyframes added{
     from{
        opacity: 0;
        translate: -100px 0;
     }
     to{
        opacity: 0;
        translate: 0 0;
     }
  }
  /*add 버튼 누를때 실행되는 이벤트*/ 
  /* .v-enter-from{
    opacity: 1;
    translate: -100px 0;
  }
  .v-enter-to{
    opacity: 0;
    translate: 0 0;
  } */
  /* remove 누를때 실행되는 이벤트*/ 
  /* .v-leave-from {
    opacity: 1;
    translate: 0 0;
  }
  .v-leave-to {
    opacity: 0;
    translate: 100px 0;
  } */
  p {
    background-color: lightgreen;
    display: inline-block;
    padding: 10px;
    transition: all 0.5s;
  }
  </style>                  


<!-- <template>
    <h1>Basic Css</h1>
    <button @click="this.doesRotate =true">회전</button>
    <div :class="{rotate: doesRotate}"></div>
</template>

<script>
export default{
    data(){
        return {
            doesRotate: false
        }
    }
}
</script>

<style>
  .rotate {
    rotate: 160deg;
    transition: rotate 1s;
  }
  #app > div {
    border: solid black 2px;
    background-color: lightcoral;
    width: 60px;
    height: 60px;
  }
  h1, button{
    margin: 10px;
  }
</style> -->