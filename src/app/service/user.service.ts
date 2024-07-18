import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  onLogin(obj:any) {
    debugger;
    return this.http.post("",obj);
  }

  getUsers() {
    return this.http.get("");
  }

}
