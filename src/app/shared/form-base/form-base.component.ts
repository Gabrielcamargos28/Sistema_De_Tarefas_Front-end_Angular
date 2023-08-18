import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormBaseService } from './form-base.service';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css']
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>


  constructor(
    private formBuilder: FormBuilder,
    private formService: FormBaseService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      login: [null, [Validators.required]],      
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3),FormValidations.equalTo('senha')]],
      role: ['outro'],
    });

    this.formService.setCadastro(this.cadastroForm)
  }

  executarAcao(){
    this.acaoClique.emit();
  }
}
