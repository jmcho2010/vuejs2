<template>

    <button @click="this.activeComp = !this.activeComp">컴포넌트 추가삭제</button>
    <div>

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

<style></style>