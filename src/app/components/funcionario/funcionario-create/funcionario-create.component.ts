import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from './funcionario.model';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})


export class FuncionarioCreateComponent implements OnInit{

  funcionario: Funcionario = {
      nome:'',
      telefone: '',
      cep: '',
      numero: ''
  }

  constructor(private funcionarioService: FuncionarioService,
    private router: Router){      
    }
    
    ngOnInit():void{
      
  }

  createFuncionario(): void{
    this.funcionarioService.create(this.funcionario).subscribe(()=>{
      this.funcionarioService.showMessage('Funcionario criado!')
      this.router.navigate(["/funcionario"])
    })
  }
  cancel(): void{
    this.router.navigate(["/funcionario"])
  }
}
