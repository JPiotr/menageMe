import {Injectable} from '@angular/core';
import {Project} from "../models/project";
import {Clasyfications} from "../logic/Clasyfications";
import {Task} from "../models/task";
import {User} from "../models/user";
import {Functionality} from "../models/functionality";

@Injectable({
  providedIn: 'root'
})
export class ContextServiceService {
  private data : any[] = [];
  constructor() { }

  public mainInContextType() : Clasyfications{
    if(this.data.length != 0){
      switch (this.data[this.data.length-1].constructor.name) {
        case Project.name: return Clasyfications.PROJECT;
        case Task.name: return Clasyfications.TASK;
        case User.name: return Clasyfications.USER;
        case Functionality.name: return Clasyfications.FUNCTIONALITY;
        default: return Clasyfications.UNKNOWN;
      }
    }
    return Clasyfications.NO_DATA_IN_CONTEXT;
  }

  public mainInContext() : any {
    return this.data[this.data.length];
  }

  public addToContext(data: any) : ContextServiceService{
    console.log(data.constructor.name);
    this.data.push(data);
    return this;
  }

  public getBackInContext() : ContextServiceService{
    if(this.data.length != 0){
      this.data.pop();
    }
    return this;
  }
}
