import {Time} from "@angular/common";

class Task {
  id: number;
  name: string;
  description: string;
  priority: number;
  functionality: Functionality;
  time: Time;
  state: States;
  addDate: string;
  startDate?: Date;
  endDate?: Date;
  user?: User;


  constructor(id: number, name: string, description: string, priority: number, functionality: Functionality, time: Time, state: States) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.functionality = functionality;
    this.time = time;
    this.state = state;
    this.addDate = Date.now().toString();
  }

}
