import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ContextService } from 'src/app/services/context-service.service';
import {Project} from "../../models/project";

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent {

   @Input() project = new Project(-1,"None","None");
   @Output() selectedAction = new EventEmitter()

   selected = false;
   public changeState(): void{
     this.selected = !this.selected
     this.selectedAction.emit(this)
   }

}

export class ProjectElementObj {
  public selected : boolean
  public project : Project


  constructor(selected: boolean, project: Project) {
    this.selected = selected;
    this.project = project;
  }
}
