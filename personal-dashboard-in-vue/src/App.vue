<template>
  <div class="flex">
    <SideNavBar />
    <div class="grow ml-64">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import SideNavBar from './components/vue/SideNavBar.vue'

export default {
  name: "App",
  components: {
    RouterView, 
    SideNavBar
  }
}
</script>