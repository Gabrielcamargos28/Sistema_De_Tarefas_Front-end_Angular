import { Component } from '@angular/core';
import { ClientesAtivos } from '../cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent {

  cliente: ClientesAtivos = {
    id_cliente: 0,
    nome: '',
    telefone: '', 
    cep:'',
    numero:'',
    cpf: '',
    cnpj: '',
    ativo: true
  }

  constructor (private  clienteService: ClienteService,  private router: Router,private route: ActivatedRoute ){
  }

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id);
    this.clienteService.readById(idNumber).subscribe(cliente => {
      console.log(cliente);
      this.cliente = cliente;
    })
  }

  updateCliente(): void{
    this.clienteService.update(this.cliente).subscribe(()=>
      this.clienteService.showMessage('Cliente Atualizado'));
      this.router.navigate(['/cliente']);
  }
  cancel(): void{
    this.router.navigate(['/cliente']);
  }

}
