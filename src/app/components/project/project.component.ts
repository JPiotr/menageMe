import { Component } from '@angular/core';
import {Project} from "../../models/project";
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  private project?: Project;
}
