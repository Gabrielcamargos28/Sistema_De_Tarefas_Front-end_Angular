import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosAtivos } from '../../pageable/funcionarios-ativos.model';

@Component({
  selector: 'app-funcionario-disable',
  templateUrl: './funcionario-disable.component.html',
  styleUrls: ['./funcionario-disable.component.css']
})
export class FuncionarioDisableComponent implements OnInit{
  funcionario: FuncionariosAtivos = {
    id_funcionario: 0,
    nome:'',
    telefone: '',
    cep: '',
    numero: '',
    ativo: false
}

  constructor(private funcionarioService: FuncionarioService,private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = Number(id);
    this.funcionarioService.readById(idNumber).subscribe((funcionario) =>{
      this.funcionario = funcionario
    })
  }

  disableFuncionario():void{
    this.funcionarioService.disable(this.funcionario.id_funcionario).subscribe(()=>
      this.funcionarioService.showMessage("Desativado com sucesso")
    )
    this.router.navigate(['/funcionario']); 
  }
  cancel():void{
    this.router.navigate(['/funcionario']); 
  }

}
