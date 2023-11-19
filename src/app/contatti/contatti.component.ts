import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  nome:string=""
  cognome:string=""
  email:string=""
  telefono:string=""
  messaggio:string=""
  checkbox:boolean=false
  contattiMessage:string=""
  contattiMessageClass:string=""
  regexEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  regexTel=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  contattaci(){
    if(this.nome=="" || this.cognome=="" || this.email=="" || this.telefono=="" ||this.messaggio==""){
      this.contattiMessage="I campi sono obbligatori"
      this.contattiMessageClass="alert alert-danger"
    }
    else if(!this.regexEmail.test(this.email)){
      this.contattiMessage="La mail inserita non è valida"
      this.contattiMessageClass="alert alert-danger"
    }
    else if(!this.regexTel.test(this.telefono)){
      this.contattiMessage="Il numero di telefono inserito non è valido"
      this.contattiMessageClass="alert alert-danger"
    }
    else if(this.checkbox==false){
      this.contattiMessage="Devi accettare le condizioni di utilizzo"
      this.contattiMessageClass="alert alert-danger"
    }
    else{
      this.contattiMessage=`Grazie ${this.nome}, il tuo messaggio è stato inviato!`
      this.contattiMessageClass="alert alert-success"
    }
  }
}
