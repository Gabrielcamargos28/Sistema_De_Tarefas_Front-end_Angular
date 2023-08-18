import { LoginComponent } from './../../views/login/login.component';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CadastroUsuario } from 'src/app/views/cadastrar-usuario/cadastro.model';
import jwt_decode  from 'jwt-decode'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<CadastroUsuario | null>(null)
  
  constructor(private tokenService:TokenService) { 
    if(this.tokenService.possuiToken()){
      this.decodificarJWT()
    }
  }

  decodificarJWT(){
    const token = this.tokenService.retornarToken()
    const usuario = jwt_decode(token) as CadastroUsuario
    this.usuarioSubject.next(usuario)
  }

  retornarUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string){
    console.log('Token salvo?',token)
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout(){
    this.tokenService.excluirToken()
    this.usuarioSubject.next(null);
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

}
