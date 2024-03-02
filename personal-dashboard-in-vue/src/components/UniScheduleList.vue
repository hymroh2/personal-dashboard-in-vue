<template>
  <div v-for="item in uniScheduleStore.getScheduleToday">
    <ScheduleItem :id="item.id" :course_code="item.course_id" :class_type="item.class_type" :time="item.start_time" />
  </div>
</template>

<script lang="ts">
  import ScheduleItem from '@/components/ScheduleItem.vue';
  import { useUniScheduleStore } from '@/stores/UniScheduleStore'

  export default {
    name: 'UniScheduleList',
    components: {
      ScheduleItem
    },
    setup() {
      const uniScheduleStore = useUniScheduleStore();
      return { uniScheduleStore };
    }
  }
</script>