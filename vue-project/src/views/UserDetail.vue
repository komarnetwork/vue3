<template>
  <h1>ini halaman {{ $route.params.name }}</h1>
  <RouterLink :to="'/user/' + $route.params.name + '/posts'">{{ $route.params.name }}'s Posts</RouterLink> <br>
  <RouterLink :to="'/user/' + $route.params.name + '/profile'">{{ $route.params.name }}'s Profile</RouterLink>
</template>