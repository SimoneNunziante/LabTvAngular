import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(private renderer:Renderer2, private router:Router){} 
  //il renderer mi permette di manipolare il DOM, in questo caso specifico quando la checkbox è attiva aggiungo la classe "attivo" che utilizzo in styles.css per rendere l'overflow hidden (html.attivo)

  isChecked: boolean = false;

  toggleCheckbox() {
    if(this.isChecked = !this.isChecked){
      this.renderer.addClass(document.documentElement, 'attivo')
    }
    else{
      this.renderer.removeClass(document.documentElement, 'attivo')
    } //rimuovo la classe "attivo" e riabilito l'overflow quando la checkbox non è attiva
  }

  login(){
    if(localStorage.getItem('accessToken')){
      this.router.navigate(['/dashboard', localStorage.getItem('accessToken')])
    }
    else{
      this.router.navigate(['/login'])
    }
  }

}
