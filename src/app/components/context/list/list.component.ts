import { Component } from '@angular/core';
import {ContextService} from "../../../services/context-service.service";
import {DbService} from "../../../services/db-service.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {IContextUser} from "../IContextUser";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements IContextUser{
  ContextService : ContextService = ContextService.getInstance();
  DbService : DbService = new DbService(this.http);
  data : any;



  constructor(private http: HttpClient) {
  }
}
