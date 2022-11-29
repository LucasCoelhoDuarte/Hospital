import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './medicos/medicos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import '@angular/common/locales/global/pt';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { MedicosCadastroComponent } from './medicos-cadastro/medicos-cadastro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesCadastroComponent } from './pacientes-cadastro/pacientes-cadastro.component';
import { DoencasComponent } from './doencas/doencas.component';
import { DoencasCadastroComponent } from './doencas-cadastro/doencas-cadastro.component';

const routes: Route[] = [

  {
    path: 'listagem-medicos',
    component: MedicosComponent
  },
  {
    path: 'cadastro-medico',
    component: MedicosCadastroComponent
  },
  {
    path: 'edicao-medico/:id',
    component: MedicosCadastroComponent
  },

  {
    path: 'listagem-pacientes',
    component: PacientesComponent
  },
  {
    path: 'cadastro-paciente',
    component: PacientesCadastroComponent
  },
  {
    path: 'edicao-paciente/:id',
    component: PacientesCadastroComponent
  },

  {
    path: 'listagem-doencas',
    component: DoencasComponent
  },
  {
    path: 'cadastro-doenca',
    component: DoencasCadastroComponent
  },
  {
    path: 'edicao-doenca/:id',
    component: DoencasCadastroComponent
  },

  {
    path: '**',
    redirectTo: '/listagem-medicos',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicosCadastroComponent,
    PacientesComponent,
    PacientesCadastroComponent,
    DoencasComponent,
    DoencasCadastroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
