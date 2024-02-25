<template>
  <div>
    <ScheduleItem />
  </div>
</template>

<script lang="ts">
  import ScheduleItem from '@/components/ScheduleItem.vue';

  export default {
    name: 'UniScheduleList',
    components: {
      ScheduleItem
    }
  }
</script>