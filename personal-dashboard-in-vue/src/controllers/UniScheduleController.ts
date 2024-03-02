import type { DataController } from "./DataController";
import type { UniScheduleItem } from "@/types/UniScheduleTypes";
import { UniScheduleModel } from "@/models/UniScheduleModel";

export default class UniScheduleController implements DataController {
  
  model: UniScheduleModel;
  
  constructor() {
    this.model = new UniScheduleModel();
  }

  async getData(): Promise<UniScheduleItem[]> {
    let data = await this.model.getData();
    return data;
  }
}