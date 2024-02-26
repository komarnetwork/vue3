<template>
  <h1>List User</h1>

  <ul>
    <li v-for="user in users">
      <RouterLink :to="'/user/' + user.params">
        <p>{{ user.name }}</p>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { params: 'msg', name: "Msg" },
        { params: 'ben', name: "Ben" },
        { params: 'reg', name: "Reg" },
      ]
    }
  }
}
</script>