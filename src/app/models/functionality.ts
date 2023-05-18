class Functionality {
  name: string;
  description: string;
  priority: number;
  project: Project;
  owner: any | string;
  state: States;

  constructor(name: string, description: string, priority: number, project: Project, owner: any, state: States) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.owner = owner;
    this.state = state;
  }
}

