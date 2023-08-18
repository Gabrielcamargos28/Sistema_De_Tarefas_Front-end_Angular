import { Component } from '@angular/core';
import { FormBaseService } from 'src/app/shared/form-base/form-base.service';
import { CadastroUsuarioService } from './cadastrar.service';
import { CadastroUsuario } from './cadastro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  constructor(private formularioService: FormBaseService
              ,private cadastroService: CadastroUsuarioService,
              private router: Router){

  }

  cadastrar(){
  const formCadastro = this.formularioService.getCadastro()
  if(formCadastro?.valid){
    const novoCadastro = formCadastro.getRawValue() as CadastroUsuario

    this.cadastroService.cadastrar(novoCadastro).subscribe({
      next: (value) => {
        console.log("Cadastro Realizado",value) 
        this.router.navigate(['/login'])
      },
      error:(err) =>{
        console.log("Erro",err)
      }
    })
  }
  
  
  }
}
