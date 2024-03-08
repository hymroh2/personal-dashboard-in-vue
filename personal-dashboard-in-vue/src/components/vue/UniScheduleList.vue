<template>
  <p>Uni Schedule</p>
  <div v-if="uniScheduleStore.getScheduleToday.length > 0" v-for="item in uniScheduleStore.getScheduleAll">
    <ScheduleItem :id="item.id" :course_code="item.course_id" :class_type="item.class_type" :time="item.start_time" />
  </div>
  <p v-else>No Classes Today</p>
</template>

<script lang="ts">
  import ScheduleItem from '@/components/vue/ScheduleItem.vue';
  import { useUniScheduleStore } from '@/stores/UniScheduleStore'

  export default {
    name: 'UniScheduleList',
    components: {
      ScheduleItem
    },
    setup() {
      const uniScheduleStore = useUniScheduleStore();
      uniScheduleStore.fetchData();
      return { uniScheduleStore };
    }
  }
</script>