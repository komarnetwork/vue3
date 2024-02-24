<template>
  <Student @response="showData" studentName="Andy">ini adalah nilai slot dari parent</Student>
  <Student @response="showData" studentName="Budi"></Student>
  <Student @response="showData" studentName="Ani"></Student>

  <p>Student yang dipilih adalah : {{ selectedStudent }}</p>

  <!-- Vue Router -->
  <div class="menu">
    <Navbar />
  </div>
  <div class="main">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Student,
    Navbar
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

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.menu {
  background-color: #eeecec;
  line-height: 2;
  padding: 10px;
}

.main {
  padding: 10px;
}
</style>
