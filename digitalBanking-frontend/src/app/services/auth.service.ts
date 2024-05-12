import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users:any={
    admin:{password:'1234', role:['USER', 'ADMIN']},
    user1:{password:'1234', role:['USER']},
  }
  public username: any;
  public isAuthenticated!: boolean;
  public roles:string[]=[];
  accessToken!:string;

  constructor(private http:HttpClient, private router:Router) { }
  public login(username:string, password:string){
    let options={
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    let params = new HttpParams().set("username",username).set("password", password);
    return this.http.post('http://localhost:8085/auth/login', params, options);
  }

  loadProfile(value: any) {
    this.isAuthenticated = true;
    this.accessToken = value['access-token'];
    let decodedJwt:any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }

  logout() {
    this.isAuthenticated = false;
    this.roles = [];
    this.username = undefined;
    this.router.navigateByUrl("/login")
  }
}
