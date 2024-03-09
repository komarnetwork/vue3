import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [
      { name: 'Belajar HTML', isDone: false },
      { name: 'Belajar CSS', isDone: false },
      { name: 'Belajar Javascript', isDone: false },
      { name: 'Belajar PHP', isDone: false }
    ]
  }),
  getters: {
    showAll(state) {
      return state.todoList
    },
    doneOnly(state) {
      return state.todoList.filter((item) => item.isDone)
    },
    unDoneOnly(state) {
      return state.todoList.filter((item) => !item.isDone)
    }
  },
  actions: {
    setAsDone(name) {
      // this.todoList[index].isDone = true
      this.todoList.find((item) => item.name == name).isDone = true
    },
    setAsUndone(name) {
      // this.todoList[index].isDone = false
      this.todoList.find((item) => item.name == name).isDone = false
    },
    addTodo(data) {
      const exists = this.todoList.filter((item) => item.name == data).length

      if (exists) {
        alert('data sudah ada')
        return
      }

      this.todoList.push({ name: data, isDone: false })
    }
  }
})
