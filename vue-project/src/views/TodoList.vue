<template>
  <h1>Ini halaman TodoList</h1>

  <form @submit.prevent="todoStore.addTodo(newTodo)">
    <input type="text" v-model="newTodo" placeholder="add new todo...">
    <input type="submit" value="Add">
  </form>

  <ul v-for="(list, index) in todoStore.todoList">
    <li>
      <span>{{ list.name }}</span>
      <span>
        <button v-if="!list.isDone" @click="todoStore.setAsDone(index)">set as done</button>
        <button v-if="list.isDone" @click="todoStore.setAsUndone(index)">set as undone</button>
      </span>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  width: 500px;
}

li {
  border: solid 1px;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import { useTodoStore } from "../store/todoStore";

export default {
  setup() {
    const todoStore = useTodoStore()

    return { todoStore }
  },
  data() {
    return { newTodo: '' }
  }
}
</script>