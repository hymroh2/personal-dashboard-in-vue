import { defineStore } from "pinia";

export const useUniScheduleStore = defineStore('uniScheduleStore', {
  state: () => ({
    schedule: []
  })
})