import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  wishfilm:string="http://localhost:3000/posts"

  chiamataWish(filmSelezionato:any):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders(
      {
        'content-type':'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('accessToken')
      }
      )
    }
    return this.http.post(this.wishfilm, filmSelezionato, httpOptions)
  }


  prendiLista():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders(
      {
        'content-type':'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('accessToken')
      }
      )
    }

    return this.http.get(this.wishfilm, httpOptions)
  }

  cancellaFilm(item:number){
    const urldelete=`http://localhost:3000/posts/${item}`;
    const httpOptions={
      headers: new HttpHeaders(
      {
        'content-type':'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('accessToken')
      }
      )
    }

    return this.http.delete(urldelete, httpOptions)
  }
} 
