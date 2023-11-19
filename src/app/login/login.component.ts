import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginservice:LoginService, private router: Router){}

  email:string="";
  password:string="";
  loginMessage: string="";
  loginMessageClass: string="";
  isInvalid:boolean=false


  regexEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  regexPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  login() {
    const user={
      email: this.email,
      password: this.password
    }

    if(this.email==""||this.password==""){
      this.loginMessage="I campi email e password sono obbligatori"
      this.loginMessageClass="alert alert-danger"
    }

    else if(!this.regexEmail.test(this.email)){
      this.loginMessage="L'indirizzo email non è valido"
      this.loginMessageClass="alert alert-danger"
      this.isInvalid=true
    }

    else if(!this.regexPassword.test(this.password)){
      this.loginMessage="La password inserita non è valida, deve contenere almeno 8 caratteri di cui uno maiuscolo, uno minuscolo ed un numero"
      this.loginMessageClass="alert alert-danger"
    }

    else{
      this.loginservice.login_method(user).subscribe((data)=>{
        
  
        this.loginMessage = `Felici di rivederti, ${this.email}`;
        this.loginMessageClass = "alert alert-success";
  
       
        localStorage.setItem('accessToken', data.accessToken); 
        localStorage.setItem('userEmail', data.user.email); 
        localStorage.setItem('userId', data.user.id); 
        
        setTimeout(()=>{
          this.router.navigate(['/dashboard', localStorage.getItem('accessToken')]);
        }, 3000) 

      })
    }
  }
}
