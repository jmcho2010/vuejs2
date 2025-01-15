<!-- 머리 몸통 다리 로 구분하듯이 
template script style로 둘것()-->

<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            name: '사과',
            message: '사과가 좋아요'
        }
    }
};
</script>

<style>
</style>