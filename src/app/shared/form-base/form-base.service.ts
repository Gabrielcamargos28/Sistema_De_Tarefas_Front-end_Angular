import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBaseService {


  cadastroForm: FormGroup | null = null;

  getCadastro(){
    return this.cadastroForm
  } 
  
  setCadastro(form: FormGroup){
    this.cadastroForm = form;
  }
}
