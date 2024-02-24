<template>
  <p>ini komponen student {{ studentName }} <button @click="showData">Show Detail</button></p>
</template>

<script>
export default {
  props: {
    studentName: String
  },
  emits: ['response'],
  methods: {
    showData() {
      this.$emit('response', this.studentName)
    }
  }
}
</script>