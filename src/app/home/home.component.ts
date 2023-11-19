import { Component, Renderer2 } from '@angular/core';
import { FilmService } from '../services/film.service';
import { DomSanitizer } from '@angular/platform-browser'; //sanifica i dati prima di passarli al DOM
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  constructor(private filmservice:FilmService, private sanitizer: DomSanitizer, private renderer:Renderer2, private router:Router, private wish:WishlistService){}


  /*INIZIO DICHIARAZIONI*/
  filmCercato=""
  risFilmCercato:Array<any>=[]

  isCastVisible:boolean=false

  filmMostPopular:Array<any>=[]
  filmTopRated:Array<any>=[]
  filmHorror:Array<any>=[]
  filmCommedia:Array<any>=[]
  filmAnimazione:Array<any>=[]

  movieById:any

  showPopup:boolean=false

  movieTrailer:any
  embedUrl:any

  filmCast:Array<any>=[]
  filmDirector:Array<any>=[]
  similarMovies:Array<any>=[]

  popupTrovaFilm:boolean=false

  scroll:Array<any>=[]
  page:number=2
  d_none:string="d-none" //classe bootstrap (display: none)
  /*FINE DICHIARAZIONI*/


  /*NGONINIT*/
  ngOnInit(){
    this.getMostPopular()
    this.getTopRated()
    this.getHorror()
    this.getCommedia()
    this.getAnimazione()
  }
  /*FINE NGONINIT*/


  /*CHIAMATE API FILM*/
  getMostPopular(){
    this.filmservice.getMostPopular().subscribe((data)=>{
      console.log(data.results)
      this.filmMostPopular=data.results
    })
  }

  getTopRated(){
    this.filmservice.getTopRated().subscribe((data)=>{
      this.filmTopRated=data.results
    })
  }

  getHorror(){
    this.filmservice.getHorror().subscribe((data)=>{
      this.filmHorror=data.results
    })
  }

  getCommedia(){
    this.filmservice.getCommedia().subscribe((data)=>{
      this.filmCommedia=data.results
    })
  }

  getAnimazione(){
    this.filmservice.getAnimazione().subscribe((data)=>{
      this.filmAnimazione=data.results
    })
  }
  
  getMovieById(id: number) {
    this.filmservice.getMovieById(id).subscribe((data)=>{
      this.movieById=data
      this.showPopup=true
      this.renderer.addClass(document.documentElement, 'popup-active') //aggiungo la classe popup-active di modo che in styles.css possa nascondere l'overflow quando il popup è aperto.
      this.getTrailer(id)
      this.getCast(id)
      this.getSimilarMovies(id)
    });
  }

  getTrailer(id:number){
    this.filmservice.getTrailer(id).subscribe((data)=>{
      this.movieTrailer=data.results[0].key
      this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movieTrailer); //per evitare che mi venga bloccato l'embed del trailer
    })
  }

  getCast(id:number){
    this.filmservice.getCast(id).subscribe((data)=>{
      this.filmCast=data.cast
      this.filmDirector=data.crew
    })
  }

  getSimilarMovies(id:number){
    this.filmservice.getSimilarMovies(id).subscribe((data)=>{
      this.similarMovies=data.results
    })
  }
  /*FINE CHIAMATE API FILM*/


  /*GESTIONE POPUP*/
  closePopup(){
    this.showPopup=false;
    this.renderer.removeClass(document.documentElement, 'popup-active'); //quando chiudo il popup rimuovo la classe
  }

  showCast(){
    this.isCastVisible=true
  }

  hideCast(){
    this.isCastVisible=false
  }
  /*FINE GESTIONE POPUP*/


  /*GESTIONE RICERCA FILM*/
  trovaFilm(){
    const url=`https://api.themoviedb.org/3/search/movie?api_key=${this.filmservice.apiKey}&query=${encodeURIComponent(this.filmCercato)}`;
  
    this.filmservice.getFilmCercato(url).subscribe({
      next: (data)=>{
      this.risFilmCercato=data.results
      this.popupTrovaFilm=true
      this.renderer.addClass(document.documentElement, 'popuptrovafilm-active') //attivo la classe popuptrovafilm-active

      if(this.risFilmCercato.length<5){
        this.risFilmCercato=this.risFilmCercato.concat(this.filmMostPopular) //se ottengo dalla chiamata API meno di 5 risultati concateno il risultato derivante dalla ricerca effettuata ad una chiamata ad i film più popolari.
      }
    },
    error: (err)=>{
      console.log(err)
    },
    complete: ()=>{}
    })
  }

  hideTrovaFilm(){
    this.popupTrovaFilm=false
    this.filmCercato=""
    this.renderer.removeClass(document.documentElement, 'popuptrovafilm-active'); //rimuovo la classe popuptrovafilm-active
  }

  public truncateTitle(title: string): string {
    if (title.length > 20) {
      return title.slice(0, 20) + '...';
    }
    return title;
  } //se il titolo è maggiore di 20 caratteri viene troncato e vengono aggiunti i "...".

  defaultImageUrl: string = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' //In caso la foto dell'attore non sia disponibile utilizzo questa immagine di default.
  /*FINE GESTIONE RICERCA FILM*/


  /*GESTIONE ACQUISTA*/
  acquista(movieById:any){
    if(localStorage.getItem('accessToken')){
      this.router.navigate(['/dashboard', localStorage.getItem('accessToken')])
      this.renderer.removeClass(document.documentElement, 'popup-active')
    }
    else{
      this.router.navigate(['/login'])
      this.renderer.removeClass(document.documentElement, 'popup-active')
    }

    const filmSelezionato={
      "userId":localStorage.getItem('userId'), 
      "name": movieById.title,
      "id":movieById.id,
      "poster": `https://image.tmdb.org/t/p/w500${movieById.poster_path}`
    }

    this.wish.chiamataWish(filmSelezionato).subscribe((data)=>{
      console.log(data)
    })
  }
  /*FINE GESTIONE ACQUISTA*/


  /*SCROLL INFINITO*/
  caricaAltro(){
    this.page++
    this.filmservice.scrollInfinito(this.page).subscribe((data)=>{
      console.log(data.results)
      this.scroll=this.scroll.concat(data.results)
      this.d_none="d-block"
    })
  }
  /*FINE SCROLL INFINITO*/

}


