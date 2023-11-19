import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {

  constructor(private loginservice: LoginService, private router: Router){}

  email:string = '';
  password:string = '';
  confirmPassword:string = '';
  registratiMessaggio: string = "";
  registratiMessaggioClass: string = "";
  regexMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  regexPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  registrati() {
    const user={
      email: this.email,
      password: this.password
    }

    if(this.email=="" || this.password=="" || this.confirmPassword==""){
      this.registratiMessaggio="Compila tutti i campi"
      this.registratiMessaggioClass="alert alert-danger"
    }
    else if(!this.regexMail.test(this.email)){
      this.registratiMessaggio="La mail inserita non è valida"
      this.registratiMessaggioClass="alert alert-danger"
    }
    else if(!this.regexPassword.test(this.password)){
      this.registratiMessaggio="La password inserita non è valida, deve contenere almeno 8 caratteri di cui uno maiuscolo, uno minuscolo ed un numero"
      this.registratiMessaggioClass="alert alert-danger"
    }
    else if(this.password!=this.confirmPassword){
      this.registratiMessaggio="Le due password non coincidono"
      this.registratiMessaggioClass="alert alert-danger"
    }
    else{
      this.loginservice.registrazione_method(user).subscribe((data) => {
  
        this.registratiMessaggio = `Registrazione avvenuta con successo! Benvenuto/a ${this.email}`;
        this.registratiMessaggioClass = "alert alert-success";
  
        // Salvo l'accessToken e l'userId nel localStorage
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userEmail', data.user.email);
        localStorage.setItem('userId', data.user.id);
  
        setTimeout(()=>{
          this.router.navigate(['/dashboard', localStorage.getItem('accessToken')]);
        }, 3000)
      });
    }
  }
}
