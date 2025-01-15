<template>

</template>

<script>

import {ref, computed} from 'vue'

    export default{
        name: 'TodoList',
        setup(){
            const todos = ref([]);
            const newTodo = ref([]);
            const currentFilter = ref('전체');
            const filters = ['전체', '진행중', '완료'];
        }
    }



</script>

<style scoped>
.todo-container {
  padding: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.add-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}

.filter-btn.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.todo-checkbox {
  margin-right: 10px;
}

.todo-text {
  flex: 1;
}

.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.todo-stats {
  margin-top: 20px;
  color: #666;
  font-size: 14px;
}
</style>