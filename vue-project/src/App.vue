<template>
  <Student @response="showData" studentName="Andy">ini adalah nilai slot dari parent</Student>
  <Student @response="showData" studentName="Budi"></Student>
  <Student @response="showData" studentName="Ani"></Student>

  <p>Student yang dipilih adalah : {{ selectedStudent }}</p>
</template>

<script>
import Student from './components/Student.vue'

export default {
  components: {
    Student
  },
  data() {
    return {
      selectedStudent: ''
    }
  },
  methods: {
    showData(whatever) {
      this.selectedStudent = whatever
    }
  }
}
</script>