<template>
    <h1>Food</h1>
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
    food-desc="피자는 피자나무에서 자라요"
    v-bind:is-favorite="false"
    />
    <props-exam 
    food-name="pasta"
    food-desc="파스타는 파스타나무에서 자라요"
    v-bind:is-favorite="false"
    />

</template>

<script></script>

<style>
    #app > div{
        border:dashed black 1px;
        display: inline-block;
        width: 120px;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
</style>