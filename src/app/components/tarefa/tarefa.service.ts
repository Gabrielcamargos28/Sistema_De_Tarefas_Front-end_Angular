import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TarefasAtivas } from "./tarefa.model";
import { EMPTY, Observable, catchError, map } from "rxjs";
import { ApiResponse } from "../pageable/api-response";

@Injectable({
    providedIn: 'root'
})

export class TarefasService{

    baseUrl = 'http://localhost:8080/tarefas/'

    constructor(private snackBar: MatSnackBar, private http: HttpClient){
    }
    showMessage(msg: string, isError: boolean = false):void{
        this.snackBar.open(msg,'X',{
          duration: 4000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? ['msg-error'] : ['msg-success'] 
        })
    }

    create(tarefa: TarefasAtivas) {
        const url = this.baseUrl+'agendartarefa'
        return this.http.post(url, tarefa).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        )
      }
    
    errorHandler(e: any): Observable<any>{
        this.showMessage('Ocorreu um erro', true)
        return EMPTY;
    }

    readTarefasAtivas(): Observable<ApiResponse>{
        const url = this.baseUrl + "mostrartarefas"
        return this.http.get<ApiResponse[]>(url).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        )
    }

    readById(id: number): Observable<TarefasAtivas>{
        const url = this.baseUrl + `detalhar/${id}`
        return this.http.get<TarefasAtivas>(url).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        )
    }
    update(tarefas: TarefasAtivas): Observable<TarefasAtivas>{
        const url = this.baseUrl + `atualizarfuncionario`
        return this.http.put<TarefasAtivas>(url,tarefas).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        )
    }

    disable(id: number){
        const url = this.baseUrl + `desativartarefa/${id}`;
        return this.http.delete(url).pipe(
          map(obj => obj),
          catchError(e => this.errorHandler(e))
        )
    }
}