import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router, private wish:WishlistService, private renderer:Renderer2){}

  userEmail=localStorage.getItem('userEmail')
  listaFilm:Array<any>=[]



  logout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('userEmail')
    this.router.navigate(['/home'])
  }

  ngOnInit(){
    const userId=localStorage.getItem('userId')

    this.wish.prendiLista().subscribe((data)=>{
      this.listaFilm=data.filter((filmFiltrati:any)=>filmFiltrati.userId===userId)
    })   
  }

  cancellaFilm(item:any){
    this.wish.cancellaFilm(item.id).subscribe((data)=>{
      location.reload()
    })
  }
}
