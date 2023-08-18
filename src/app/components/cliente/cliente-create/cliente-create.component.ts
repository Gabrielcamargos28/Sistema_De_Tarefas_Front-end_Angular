import { ClienteService } from './../cliente.service';
import { Component } from '@angular/core';
import { Cliente } from './cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  
  cliente: Cliente = {
    nome: '',
    telefone: '',
    cep: '',
    numero: '',
    cpf: '',
    cnpj: ''
  }
  constructor (private clienteService: ClienteService, private router: Router){
  }

  ngOnInit(){

  }

  createCliente(): void{
      this.clienteService.create(this.cliente).subscribe(()=>{
        this.clienteService.showMessage('Cliente Criado!')
        this.router.navigate(["/cliente"])
      })
  }

  cancel(){
    this.router.navigate(["/cliente"])
  }

}
