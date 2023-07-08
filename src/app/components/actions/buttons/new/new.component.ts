import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {IButton} from "../IButton";
import {IContextUser} from "../../../../logic/IContextUser";
import { ContextService } from 'src/app/services/context-service.service';
import {Clasyfications} from "../../../../logic/Clasyfications";
import {Project} from "../../../../models/project";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements IButton, IContextUser{
  ContextService: ContextService = ContextService.getInstance();

  icon = faPlus;



  action() {
    switch (this.ContextService.mainInContextType()) {
      case Clasyfications.NO_DATA_IN_CONTEXT:
        this.ContextService.addToContext(new Project(0," ", " "))
        console.log(this.ContextService)
        break
      default: break;

    }
  }
}
