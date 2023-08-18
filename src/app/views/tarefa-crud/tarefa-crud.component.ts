import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa-crud',
  templateUrl: './tarefa-crud.component.html',
  styleUrls: ['./tarefa-crud.component.css']
})
export class TarefaCrudComponent {

  constructor(private router: Router){

  }
  ngOnInit(): void {
      
  }
  navigateToTarefaCreate():void{
    this.router.navigate(['tarefa/cadastrar'])  
  }
}
