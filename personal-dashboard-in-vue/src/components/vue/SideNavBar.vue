<template>
  <div class="fixed h-screen bg-gray-600 max-w-64 w-full">
    <h1>My App</h1>
    <RouterLink to="/" class="block">Home</RouterLink>
    <RouterLink to="/about" class="block">About</RouterLink>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
  name: "SideNavBar",
  components: {
    RouterLink
  }
}
</script>

<style></style>