import { defineStore } from "pinia";
import type { UniScheduleItem } from "@/types/UniScheduleTypes";
import UniScheduleController from "@/controllers/UniScheduleController";

export const useUniScheduleStore = defineStore('uniScheduleStore', {
  state: () => ({
    schedule: [] as UniScheduleItem[],
    controller: new UniScheduleController()
  }),
  getters: {
    getScheduleAll: (state) => {
      return state.schedule;
    },
    getScheduleToday: (state) => {
      const today: Number = (new Date()).getDay();

      let schedule: UniScheduleItem[] = [];

      function compareStartTime(a: UniScheduleItem, b: UniScheduleItem) {
        return a.start_time - b.start_time;
      }

      if (state.schedule.length > 0) {
        schedule = state.schedule.filter((session) => session.day === today).sort(compareStartTime);
      }
      return schedule;
    },
    getController: (state) => {
      return state.controller;
    }
  },
  actions: {
    async fetchData() {
      this.schedule = await this.controller.getData()
    }
  }
})