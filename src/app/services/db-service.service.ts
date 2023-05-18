import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  private source: string = "http://localhost:3000/";
  constructor(private _httpClient: HttpClient) {

  }

  addData(data: any, table: string) : Observable<any>{
    let link = this.source + table;
    return this._httpClient.post(link,data);
  }

}
