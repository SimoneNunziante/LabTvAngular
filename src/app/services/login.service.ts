import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}

  login: string = "http://localhost:3000/login";
  registrazione: string = "http://localhost:3000/register";
  acquistoFilm: string = "http://localhost:3000/posts";

  login_method(user:any):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'content-type': 'application/json'
        }
      )
    }
    return this.http.post(this.login, user, httpOptions)
  }

  registrazione_method(user:any):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'content-type': 'application/json'
        }
      )
    }
    return this.http.post(this.registrazione, user, httpOptions)
  }
}
