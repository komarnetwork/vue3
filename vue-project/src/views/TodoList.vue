<template>
  <h1>ini halaman TodoList</h1>
  {{ todoStore.count }}
  <button @click="todoStore.increment">Add</button>
</template>

<script>
import { useTodoStore } from "../store/todoStore";

export default {
  setup() {
    const todoStore = useTodoStore()

    return { todoStore }
  }
}
</script>