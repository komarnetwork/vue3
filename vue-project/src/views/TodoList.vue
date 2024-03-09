<template>
  <h1>Ini halaman TodoList</h1>

  <form @submit.prevent="todoStore.addTodo(newTodo)">
    <input type="text" v-model="newTodo" placeholder="add new todo...">
    <input type="submit" value="Add">
  </form>

  <div class="title">
    <h3>My Todo List</h3>
  </div>

  <div class="getters-button title">
    <button class="btn" @click="show = 'all'">Show All</button>
    <button class="btn done" @click="show = 'done only'">Done Only</button>
    <button class="btn undone" @click="show = 'undone only'">Undone Only</button>
  </div>

  <!-- Show All -->
  <div v-if="show == 'all'">
    <ul v-for="list in todoStore.showAll">
      <li>
        <span class="listName">{{ list.name }}</span>
        <span>
          <button class="btn done" v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">set as done</button>
          <button class="btn undone" v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">set as undone</button>
        </span>
      </li>
    </ul>
  </div>

  <!-- Done Only -->
  <div v-if="show == 'done only'">
    <ul v-for="list in todoStore.doneOnly">
      <li>
        <span class="listName">{{ list.name }}</span>
        <span>
          <button class="btn done" v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">set as done</button>
          <button class="btn undone" v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">set as undone</button>
        </span>
      </li>
    </ul>
  </div>

  <!-- UnDone Only -->
  <div v-if="show == 'undone only'">
    <ul v-for="list in todoStore.unDoneOnly">
      <li>
        <span class="listName">{{ list.name }}</span>
        <span>
          <button class="btn done" v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">set as done</button>
          <button class="btn undone" v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">set as undone</button>
        </span>
      </li>
    </ul>
  </div>

</template>

<style scoped>
form {
  width: 500px;
  padding-inline-start: 40px;
  margin-bottom: 40px;
}

form input {
  padding: 10px;
}

form input:first-child {
  width: 80%;
  margin: 0px 10px;
}

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

.title {
  width: 500px;
  padding-inline-start: 40px;
}

.title h3 {
  text-align: center;
}

.listName {
  justify-content: center;
  margin: 5px;
}

.getters-button {
  display: flex;
  justify-content: center;
}

.btn {
  border-radius: 5px;
  margin: 5px;
}

.done {
  background-color: aquamarine;
}

.undone {
  background-color: yellowgreen;
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
    return {
      newTodo: '',
      show: 'all'
    }
  }
}
</script>