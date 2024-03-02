import type { UniScheduleItem } from "@/types/UniScheduleTypes"

export interface DataController {
  getData(): UniScheduleItem[]
}