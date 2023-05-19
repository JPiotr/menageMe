import {Privilages} from "./privilages";

export class User {
  id: number;
  login: string;
  private password: string;
  name: string;
  surname: string;
  privileges: Privilages;


  constructor(id: number,login: string, password: string, name: string, surname: string, privilages: Privilages) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.privileges = privilages;
  }
}
