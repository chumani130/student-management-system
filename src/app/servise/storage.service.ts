import { Injectable } from '@angular/core';

const USER = "User";
const TOKEN = "Token";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUSer(user: any) {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static getToken(): string {
    return window.localStorage.getItem(TOKEN);
  }
  static getUSer(): any {
    return JSON.parse(localStorage.getItem(USER))
  }

  static getUserRole(): string {
    const user = this.getUser();
    if(user==null) {
      return '';
    }
    return user.role;
  }
  static isAdminLoggedIn(): boolean {
    if(this.getToken()==null){
      return false;
    }
    const role: string = this.getUserRole();
    return role == "ADMIN";
  }

  static isUSerLoggedIn(): boolean {
    if(this.getToken()==null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role == "USER"
  }
  static logout() {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER); 
  }
}
