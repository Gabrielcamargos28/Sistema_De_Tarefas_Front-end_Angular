import { UsuarioService } from './../../components/usuario/usuario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, catchError, EMPTY, tap } from 'rxjs';
import { AutorizacaoLogin } from './login.model';


interface AuthResponse{
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoLogin {

  baseUrl = 'http://localhost:8080/auth/'

  constructor(private snackBar: MatSnackBar, private http: HttpClient,
    private usuarioService:UsuarioService) { }

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

  autenticar(login: AutorizacaoLogin): Observable<HttpResponse<AuthResponse>> {
    const url = this.baseUrl + 'login'
    return this.http.post<AuthResponse>(url,login,{observe:'response'}).pipe(
      tap(response => {
        const authToken = response.body?.token || ''
        this.usuarioService.salvarToken(authToken)
      })
    )
    }
}


