<template>
    <h2>Component</h2>
    <p>This is the component</p>
    <p id="pResult">{{ text }}</p>
</template>

<script>
export default {
	data() {
		return {
			text: '...'
		}
	},
  // beforeCreate는 DOM요소들을 모두 불러오기전에 로딩이되서
  // text 프로퍼티에 값을 세팅하기가 불가능해진다.
  // 이유 : 로딩도안됐는데 text 프로퍼티를 찾아봐야 렌더링시에는 이미 그 내용을 적용할수가 없음.
//   beforeCreate() {
// 		this.text = 'initial text';
//     console.log("beforeCreate: The component is not created yet.");
//   }
    //created는 DOM 요소들을 모두 렌더링후에 실행되는 메서드(훅)이다 보니
    // text 프로퍼티에 값을 제대로 세팅하는것이 가능.
    created() {
		this.text = 'initial text';
        console.log("beforeCreate: The component is not created yet.");
    }
}
</script>     