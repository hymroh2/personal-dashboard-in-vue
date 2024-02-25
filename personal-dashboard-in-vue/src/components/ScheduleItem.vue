<template>
  <div>
    <h1>{{ course_code }}</h1>
    <p>{{ class_type }}</p>
    <p>{{ time }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScheduleItem',
  props: {
    id: String,
    course_code: String,
    class_type: String,
    time: String
  }
}
</script>

<style>
</style>