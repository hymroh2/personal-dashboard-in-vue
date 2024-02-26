import { defineStore } from "pinia";
import type { UniScheduleItem } from "@/types/UniScheduleTypes";

export const useUniScheduleStore = defineStore('uniScheduleStore', {
  state: () => ({
    schedule: [] as UniScheduleItem[]
  }),
  getters: {
    getScheduleToday: (state) => {
      const today: Number = (new Date()).getDay();
      
      let newState: UniScheduleItem[] = [];

      function compareStartTime(a: UniScheduleItem, b: UniScheduleItem) {
        return Number(a.start_time) - Number(b.start_time);
      }

      if(state.schedule.length > 0) {
        newState = state.schedule.filter((session) => session.day === today).sort(compareStartTime);
      }

      return newState;
    }
  }
})