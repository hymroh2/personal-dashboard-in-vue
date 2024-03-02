import type { DataModel } from "./DataModel"
import type { UniScheduleItem } from "@/types/UniScheduleTypes";

export class UniScheduleModel implements DataModel {
  async getData(): Promise<UniScheduleItem[]> {
    let data = await fetch("http://localhost:3000/uni_schedule");
    return await data.json();
  }
}