import { TarefasAtivas } from './../tarefa.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarefasService } from '../tarefa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent {

  public tarefaForm!: FormGroup;

  constructor(private tarefasService: TarefasService,
  private router: Router, private fb: FormBuilder){
  }

  

  ngOnInit(): void{
    this.tarefaForm = this.fb.group({
      nome: ['',[Validators.required]],
      descricao: ['',[Validators.required]],
      fk_id_cliente: [0,[Validators.required]],
      fk_id_funcionario: [0,[Validators.required]],
      data_limite: ['',[Validators.required]],
      horario: ['',[Validators.required]]
    })
  }

  createTarefa(): void{
    let newDate: moment.Moment = moment.utc(this.tarefaForm.value.data_limite).local();
    this.tarefaForm.value.data_limite = newDate.format("YYYY-MM-DD") + "T" + this.tarefaForm.value.horario; 
    this.tarefasService.create(this.tarefaForm.value).subscribe(()=>{
      console.log(this.tarefaForm.value)
      this.tarefasService.showMessage('Tarefa Criada!')
      this.tarefaForm.reset();
      this.router.navigate(['/tarefa'])
    })
  }
  cancel(): void{
    this.router.navigate(["/tarefa"])
    this.tarefaForm.reset();
  }
}
