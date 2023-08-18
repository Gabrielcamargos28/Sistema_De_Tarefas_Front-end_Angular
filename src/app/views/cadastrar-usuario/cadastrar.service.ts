import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { CadastroUsuario } from './cadastro.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  baseUrl = 'http://localhost:8080/auth/'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false):void{
    this.snackBar.open(msg,'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] 
    })
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }
  cadastrar(cadastroUsuario: CadastroUsuario){
    const url = this.baseUrl +'register'
    return this.http.post(url,cadastroUsuario)
  }
}