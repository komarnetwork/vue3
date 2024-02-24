<template>
  <Student @response="showData" studentName="Andy" />
  <Student @response="showData" studentName="Budi" />
  <Student @response="showData" studentName="Ani" />

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