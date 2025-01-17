<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <p v-if="data">{{ data }}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            data: null,
        };
    },
    methods:{
        fetchData(){
            const response = fetch("http://jsonplaceholder.typicode.com/posts");
            this.data = response;
        }
    }
}


</script>

<style></style>