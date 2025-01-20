<template>
    <h1>Lifecycle Hooks</h1>
    <button @click="this.activeComp = !this.activeComp">{{ btnText }}</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeComp: true
      }
    },
    computed: {
      btnText() {
        if(this.activeComp) {
          return 'Remove component'
        }
        else {
          return 'Add component'
        }
      }
    }
  }
  </script>
  
  <style scoped>
    div {
      border: dashed black 1px;
      border-radius: 10px;
      padding: 20px;
      margin: 10px;
      width: 400px;
      background-color: lightgreen;
    }
  </style>  


<!-- 
updated 
<template>
    <h1>The 'beforeUpdate' Lifecycle Hook</h1>
    <p>Whenever there is a change in our page, the application is 'updated' and the 'beforeUpdate' hook happens just before that.</p>
    <p>It is safe to modify our page in the 'beforeUpdate' hook like we do here, but if we modify our page in the 'updated' hook, we will generate an infinite loop.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
    <ol ref="divLog"></ol>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeComp: true
      }
    },
    updated() {
      this.$refs.divLog.innerHTML += "<li>beforeUpdate: This happened just before the 'updated' hook.</li>";
    }
  }
  </script>
  
  <style>
  #app > div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    background-color: lightgreen;
  }
  </style>                   -->

<!-- 
 create, mount
<template>

    <button @click="this.activeComp = !this.activeComp">컴포넌트 추가삭제</button>
    <div>
        <comp-one v-if="activeComp"></comp-one>
    </div>
</template>

<script>

export default{

    data(){
        return{
            activeComp: false
        }
    }
}
</script>

<style>
#app > div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgreen;
}
#pResult {
  background-color: lightcoral;
  display: inline-block;
}
</style> -->