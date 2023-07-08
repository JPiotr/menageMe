import { Component } from '@angular/core';
import {ContextService} from "../../../services/context-service.service";
import {DbService} from "../../../services/db-service.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {IContextUser} from "../../../logic/IContextUser";
import {Project} from "../../../models/project";
import {Clasyfications} from "../../../logic/Clasyfications";
import {ProjectElementComponent, ProjectElementObj} from "../../project-element/project-element.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements IContextUser{
  ContextService : ContextService = ContextService.getInstance();
  dbService : DbService = new DbService(this.http);
  data ?: any[];
  header ?: any;
  classes = this.ContextService.mainInContextType();



  constructor(private http: HttpClient) {
    this.dbService.getAllData(this.getTableNameFromContext())
      .subscribe(r => {
        this.data = r;
      })
  }

  private getTableNameFromContext() : string{
    switch (this.ContextService.mainInContextType()) {
      case Clasyfications.NO_DATA_IN_CONTEXT:
        this.header = new Project(0,"Name","Description")
        return "project";
      case Clasyfications.PROJECT:
        return "functionality";
      case Clasyfications.FUNCTIONALITY:
        return "task";
      default: return "";
    }
  }

  public onSelectedProject($event: ProjectElementComponent) : void{
    if($event.selected){

    }
  }
}
