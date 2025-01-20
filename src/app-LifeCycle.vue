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
</style>