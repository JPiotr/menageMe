import {Project} from "./project";
import {States} from "./states";

export class Functionality {
  id: number;
  name: string;
  description: string;
  priority: number;
  project: Project;
  owner: any | string;
  state: States;

  constructor(id:number, name: string, description: string, priority: number, project: Project, owner: any, state: States) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.owner = owner;
    this.state = state;
  }
}

