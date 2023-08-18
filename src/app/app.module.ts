import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { RedDirective } from './directives/red.directive';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDisableComponent } from './components/funcionario/funcionario-disable/funcionario-disable.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDisableComponent } from './components/cliente/cliente-disable/cliente-disable.component';
import { TarefaCrudComponent } from './views/tarefa-crud/tarefa-crud.component';
import { TarefaReadComponent } from './components/tarefa/tarefa-read/tarefa-read.component';
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { FormBaseComponent } from './shared/form-base/form-base.component'
import { MatRadioModule } from '@angular/material/radio'
import {MatDividerModule} from '@angular/material/divider'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { AutenticacaoInterceptor } from './components/interceptors/autenticacao.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FuncionarioCrudComponent,
    RedDirective,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    FuncionarioDisableComponent,
    ClienteReadComponent,
    ClienteCrudComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDisableComponent,
    TarefaCrudComponent,
    TarefaCrudComponent,
    TarefaReadComponent,
    TarefaCreateComponent,
    LocalDateTimePipe,
    LoginComponent,
    FormBaseComponent,
    CadastrarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  providers: [
    LocalDateTimePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
