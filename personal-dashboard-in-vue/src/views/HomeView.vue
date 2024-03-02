<template>
  <main>
    <Card><UniScheduleList /></Card>
  </main>
</template>

<script lang="ts">
import Card from '@/components/Card.vue'
import UniScheduleList from '@/components/UniScheduleList.vue';

export default {
  name: "HomeView",
  components: {
    Card,
    UniScheduleList
  }
}
</script>