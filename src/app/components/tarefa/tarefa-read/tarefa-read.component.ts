import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TarefasAtivas } from '../tarefa.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefasService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-read',
  templateUrl: './tarefa-read.component.html',
  styleUrls: ['./tarefa-read.component.css']
})

export class TarefaReadComponent implements AfterViewInit{
  tarefas: TarefasAtivas[] = []
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'fk_id_cliente','nome_cliente','fk_id_funcionario','nome_funcionario','data_limite','acao'];
  dataSource = new MatTableDataSource<TarefasAtivas>(this.tarefas);  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private tarefaService: TarefasService, private router: Router,private route: ActivatedRoute){
  }

  ngAfterViewInit(): void {
    this.tarefasListagemAtivos()
  }
  tarefasListagemAtivos():void{
    this.tarefaService.readTarefasAtivas().subscribe((data) => {
      this.tarefas = data.content
      this.dataSource = new MatTableDataSource<TarefasAtivas>(this.tarefas);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;
    })
    }

  filtroPesquisa($event: Event){

  }
}
