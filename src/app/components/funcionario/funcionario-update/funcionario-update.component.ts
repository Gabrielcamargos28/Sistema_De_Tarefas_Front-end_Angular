import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosAtivos } from '../../pageable/funcionarios-ativos.model';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit{
 
  funcionario: FuncionariosAtivos = {
    id_funcionario: 0,
    nome:'',
    telefone: '',
    cep: '',
    numero: '',
    ativo: true
}

  constructor(private funcionarioService: FuncionarioService, private router: Router,private route: ActivatedRoute){
  }

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id);
    this.funcionarioService.readById(idNumber).subscribe( funcionario => {
      console.log(funcionario);
      this.funcionario = funcionario;
    })
  }

  updateFuncionario(): void{
    this.funcionarioService.update(this.funcionario).subscribe(()=>
    this.funcionarioService.showMessage('Funcionario Atualizado'));
    this.router.navigate(['/funcionario']);
  }
  cancel():void{
    this.router.navigate(['/funcionario']);
  }
}