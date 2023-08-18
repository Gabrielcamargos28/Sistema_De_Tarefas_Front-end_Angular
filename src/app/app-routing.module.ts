import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {FuncionarioCrudComponent} from './views/funcionario-crud/funcionario-crud.component'
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDisableComponent } from './components/funcionario/funcionario-disable/funcionario-disable.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDisableComponent } from './components/cliente/cliente-disable/cliente-disable.component';
import { TarefaCrudComponent } from './views/tarefa-crud/tarefa-crud.component';
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component';
import { LoginComponent } from './views/login/login.component';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { authGuard } from './components/guard/aut.guard';


const routes: Routes = [

{
  path: "",
  pathMatch: "full",
  redirectTo: "login"
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "cadastrar",
  component: CadastrarUsuarioComponent
},
{
  path: "home",
  component: HomeComponent,
  canActivate: [authGuard]
},
{
  path: "funcionario",
  component: FuncionarioCrudComponent
},
{
  path: "funcionario/cadastrar",
  component: FuncionarioCreateComponent
},
{
  path: "funcionario/update/:id",
  component: FuncionarioUpdateComponent
},
{
  path: "funcionario/disable/:id",
  component: FuncionarioDisableComponent
},
{
  path: "cliente",
  component: ClienteCrudComponent
},
{
  path: "cliente/cadastrar",
  component: ClienteCreateComponent
},
{
  path: "cliente/update/:id",
  component: ClienteUpdateComponent
},
{
  path: "cliente/disable/:id",
  component: ClienteDisableComponent
},
{
  path: "tarefa",
  component: TarefaCrudComponent
},
{
  path: "tarefa/cadastrar",
  component: TarefaCreateComponent
},
{
  path: "login",
  component: LoginComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
