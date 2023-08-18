import { FuncionarioService } from './../funcionario.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosAtivos } from '../../pageable/funcionarios-ativos.model';


@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css'],
})


export class FuncionarioReadComponent implements AfterViewInit {

  funcionarios: FuncionariosAtivos[] = [];
  displayedColumns: string[] = ['id', 'nome', 'telefone', 'cep','numero','ativo','acao'];
  dataSource = new MatTableDataSource<FuncionariosAtivos>(this.funcionarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private funcionarioService : FuncionarioService,private router: Router,private route: ActivatedRoute){
  }

  ngAfterViewInit() {
    this.funcionariosListagemAtivos()
  }

  funcionariosListagemAtivos():void{
    this.funcionarioService.readFuncionariosAtivos().subscribe((data) => {
      this.funcionarios = data.content
      this.dataSource = new MatTableDataSource<FuncionariosAtivos>(this.funcionarios);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;
    })
    }

    
  disableFuncionario():void{
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id);
    this.funcionarioService.disable(idNumber).subscribe(()=>
      this.funcionarioService.showMessage(`Funcionario de id ${idNumber} desativado`))
      this.router.navigate(['/funcionario']);
  }  

  filtroPesquisa($event:Event){
      const value = ($event.target as HTMLInputElement).value;
      this.dataSource.filter = value;
  }


}
