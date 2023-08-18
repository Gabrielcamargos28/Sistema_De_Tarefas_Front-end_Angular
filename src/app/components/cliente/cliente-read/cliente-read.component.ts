import { MatTableDataSource } from '@angular/material/table';
import { ClientesAtivos } from './../cliente.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css'],
})


export class ClienteReadComponent implements AfterViewInit{
  clientes: ClientesAtivos[] = [];
  displayedColumns: string[] = ['id', 'nome', 'telefone', 'telefone','cep','numero','cpf','cnpj','ativo','acao'];
  dataSource = new MatTableDataSource<ClientesAtivos>(this.clientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  
  constructor(private clienteService : ClienteService,private router: Router,private route: ActivatedRoute){
  }

  ngAfterViewInit(): void {
      this.clientesListagemAtivos()
  }

  clientesListagemAtivos():void{
    this.clienteService.readClientesAtivos().subscribe((data)=>{
      this.clientes = data.content
      this.dataSource = new MatTableDataSource<ClientesAtivos>(this.clientes);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;
    })
  }

  disableFuncionario():void{
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id);
    this.clienteService.disable(idNumber).subscribe(()=>
      this.clienteService.showMessage(`Cliente de id ${idNumber} desativado`))
      this.router.navigate(['/cliente'])
  }
  filtroPesquisa($event:Event){
    const value = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}