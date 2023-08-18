import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientesAtivos } from '../cliente.model';

@Component({
  selector: 'app-cliente-disable',
  templateUrl: './cliente-disable.component.html',
  styleUrls: ['./cliente-disable.component.css']
})
export class ClienteDisableComponent {
  cliente: ClientesAtivos = {
    id_cliente: 0,
    nome:'',
    telefone:'',
    cep:'',
    cnpj:'',
    cpf: '',
    numero:'',
    ativo: false
  }

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute ){

  }

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id);
    this.clienteService.readById(idNumber).subscribe((cliente)=>{
      this.cliente = cliente;
    })
  }
  disableCliente():void{
    this.clienteService.disable(this.cliente.id_cliente).subscribe(()=>{
      this.clienteService.showMessage("Desativado com sucesso");
    })
    this.router.navigate(['/cliente'])
  }
  cancel(): void{
    this.router.navigate(['/cliente'])
  }
}
