<!-- <template>
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
        async fetchData(){
            const response = await fetch("http://jsonplaceholder.typicode.com/posts");
            // fetch는 기본적으로 promise 기반의 메서드이기때문에
            // 리턴타입 또한 프로미스타입.
            //  fetch() 메서드가 제공하는 첫번째 리턴은
            // Http 요청이 전송되었음을 의미하는 객체일뿐.
            // 즉 요청만 받아온 경우는 보류상태...
            //this.data = await response.text();
            this.data = await response.json();
        }
    }
}


</script> -->

<template>
    <div class="posts">
        <h2>게시물 목록</h2>
        <div v-if="loading">로딩중...</div>
        <div v-else-if="error">{{ error }}</div>
        <ul v-else>
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                posts: [],
                loading: false,
                error: null
            }
        },
        async created(){
            //this.loading = true;
            const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
            this.posts = response.data

        }
    }
</script>

<style></style>