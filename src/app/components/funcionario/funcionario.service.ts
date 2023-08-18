import { Funcionario } from './funcionario-create/funcionario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { ApiResponse } from '../pageable/api-response';
import { FuncionariosAtivos } from '../pageable/funcionarios-ativos.model';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = 'http://localhost:8080/funcionarios/'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false):void{
    this.snackBar.open(msg,'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] 
    })
  }

  create(funcionario: Funcionario) {
    const url = this.baseUrl+'cadastrar'
    return this.http.post(url, funcionario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }

  readFuncionariosAtivos(): Observable<ApiResponse>{
    const url = this.baseUrl + "listarfuncionarios"
    return this.http.get<ApiResponse>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<FuncionariosAtivos>{
    const url = this.baseUrl + `detalhar/${id}`
    return this.http.get<FuncionariosAtivos>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(funcionario: FuncionariosAtivos): Observable<FuncionariosAtivos>{
    const url = this.baseUrl + `atualizarfuncionario`
    return this.http.put<FuncionariosAtivos>(url,funcionario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  disable(id: number){
    const url = this.baseUrl + `desativarfuncionario/${id}`;
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
}
