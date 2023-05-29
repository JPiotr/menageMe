import {Component} from '@angular/core';
import {ContextService} from "../../services/context-service.service";
import {Project} from "../../models/project";
import {Functionality} from "../../models/functionality";
import {States} from "../../models/states";
import {Clasyfications} from "../../logic/Clasyfications";

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent {
  ContextService : ContextService = ContextService.getInstance()
    .addToContext(new Project(0,"",""))
    .addToContext(new Functionality(1,"","",2,new Project(0,"",""),"",States.TODO));

  classes : Clasyfications = this.ContextService.mainInContextType();

}
