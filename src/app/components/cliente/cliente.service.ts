import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { ApiResponse } from '../pageable/api-response';
import { Cliente } from './cliente-create/cliente.model';
import { ClientesAtivos } from './cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:8080/clientes/'

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
  
  create(cliente: Cliente){
    const url = this.baseUrl + 'cadastrar'
    return this.http.post(url, cliente).pipe(
      map(obj => obj),
      catchError(e=> this.errorHandler(e))
    )
  }

  readClientesAtivos(): Observable<ApiResponse>{
    const url = this.baseUrl + "listarclientes"
    return this.http.get<ApiResponse>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  readById(id: number): Observable<ClientesAtivos>{
    const url = this.baseUrl + `detalhar/${id}`
    return this.http.get<ClientesAtivos>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(cliente: ClientesAtivos): Observable<ClientesAtivos>{
    const url = this.baseUrl + `atualizarfuncionario`
    return this.http.put<ClientesAtivos>(url,cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  disable(id: number){
    const url = this.baseUrl + `desativarcliente/${id}`;
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e=>this.errorHandler(e))
    )
  }
}
