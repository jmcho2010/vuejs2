<template>
    <h1>Food</h1>
    <div class="wrapper">
        <props-exam 
    food-name="Apples"
    food-desc="사과는 사과 나무에서 자라요"
    v-bind:is-favorite="true"
    />
    <props-exam 
    food-name="Chicken"
    food-desc="치킨은 치킨나무에서 자라요"
    v-bind:is-favorite="true"
    />
    <props-exam 
    food-name="pizza"
    v-bind:is-favorite="false"
    />
    <props-exam 
    food-name="pasta"
    food-desc="파스타는 파스타나무에서 자라요"
    v-bind:is-favorite="false"
    />
    </div>
</template>

<script></script>

<style>
    .wrapper{
        display: flex;
        flex-wrap:wrap;
    }

    .wrapper > div{
        border:dashed black 1px;
        flex-basis: 150px;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
</style>