import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoLogin } from './login.service';
import { AutorizacaoLogin } from './login.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

    
    constructor(private formBuilder: FormBuilder, private authService: AutenticacaoLogin,private router: Router) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
          login: ['', [Validators.required]],  
          senha: ['',[Validators.required]]
        })
    }
    
    login() {
        //const login = this.loginForm.value.login;
        //const senha = this.loginForm.value.senha;
        //console.log(this.loginForm.value)


        this.authService.autenticar(this.loginForm.value).subscribe({
          next: (value) => {
            console.log(value)
              console.log('Login realizado com sucesso', value)
              this.router.navigateByUrl('/cliente')
          },
          error:(err) => {
            console.log(this.loginForm.value)
            console.log("Erro ao fazer o login",err)
          }
      })
    }
}