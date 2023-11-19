import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class FilmService {


  constructor(private http:HttpClient){}

  apiKey="f5f2fa28ef53d26df85791baef98a4ec"



  mostPopular=`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=it&page=1`

  topRated=`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=it-US&page=1`

  horror=`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it&with_genres=27`

  commedia=`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it&with_genres=35`

  animazione=`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=it&with_genres=16`


  
  
    

  getMostPopular():Observable<any>{
    return this.http.get(this.mostPopular)
  }

  getTopRated():Observable<any>{
    return this.http.get(this.topRated)
  }

  getHorror():Observable<any>{
    return this.http.get(this.horror)
  }

  getCommedia():Observable<any>{
    return this.http.get(this.commedia)
  }


  getAnimazione():Observable<any>{
    return this.http.get(this.animazione)
  }


  scrollInfinito(page:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=it&page=${page}`)
  }




  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=it-US`);
  }

  getTrailer(id:number):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}&language=it-US`)
  }

  getCast(id:number):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}&language=it-US`)
  }

  getSimilarMovies(id:number):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}&language=it-US&page=1`)
  }


  getFilmCercato(url: string):Observable<any> {
    return this.http.get(url)
  }

  
}