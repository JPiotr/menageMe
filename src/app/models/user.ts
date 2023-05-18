class User {
  login: string;
  private password: string;
  name: string;
  surname: string;
  privilages: Privilages;


  constructor(login: string, password: string, name: string, surname: string, privilages: Privilages) {
    this.login = login;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.privilages = privilages;
  }
}
