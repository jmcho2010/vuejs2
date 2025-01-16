<template>
  <div class="container">
    <header>
      <!-- 슬롯은 무조건 slot이라는 이름으로만 만들어두진 않음.-->
      <slot name="header"><h1>헤더인데 정의된게 있을때만 적용</h1></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>

</template>

<script>
    export default{
        name: 'SlotComp'
    }
</script>

<style scoped>

</style>