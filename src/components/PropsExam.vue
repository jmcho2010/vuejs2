<template>
    <div>
        <h2>{{ foodName }}</h2>
        <img src="../assets/img_quality.svg" v-show="isFavorite">
        <p>{{ foodDesc }}</p>
    </div>
</template>

<script>
export default{
    props: [
        'foodName', 'foodDesc', 'isFavorite'
    ]
};
</script>

<style>
    img{
        height: 1.5em;
        float:right;
    }
</style>