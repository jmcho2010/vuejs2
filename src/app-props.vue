<template>
    <h1>Food</h1>
    <div class="wrapper">
        <props-exam
         v-for="i in foods"
         :key="i.name"
         :food-name="i.name"
         :food-desc="i.desc"
         :is-favorite="i.favorite"
         @toggle-favorite="receiveEmit"/>
    </div>
    <!-- 
    아래와 같은 방식으로 웹 서비스를 제공하는것은
    서비스 유지보수시 매우 힘듬.
    데이터를 좀더 쉽고 빠르게 그리고 개발자가 손을 덜쓰는쪽으로
    방향을 수정할 필요가 있음.
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
    </div> -->
</template>

<script>
export default{
    data(){
        return{
            foods: [
                {name: '사과',
                 desc: '사과는 사과나무에서 열려요',
                 favorite: true   
                },
                {name: '피자',
                 desc: '피자는 피자나무에서 열려요',
                 favorite: true   
                }
            ]
        };
    },
    methods:{
        // emit을 활용할경우
        // 자식컴포넌트에는 같은 메서드를
        // 만들이유가 없기때문에 재사용성 상승의
        // 효과를 누릴수 있음.
        receiveEmit(food){
            alert("선택한 항목 : " + food);
        }
    }
}

</script>

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