import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ListaTopicosComponent } from './views/home/lista-topicos/lista-topicos.component';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './views/home/login/login.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopicoFormDialogComponent } from './views/home/topico-form-dialog/topico-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DetalhesTopicosComponent } from './views/home/detalhes-topicos/detalhes-topicos.component';
// import { DetalhesComponent } from './views/usuario/detalhes/detalhes.component';
import { UsuarioDetalhesComponent } from './views/usuario/usuario-detalhes/usuario-detalhes.component';
import { CursoComponent } from './views/curso/curso.component';
import { ListaCursosComponent } from './views/curso/lista-cursos/lista-cursos.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaTopicosComponent,
    LoginComponent,
    TopicoFormDialogComponent,
    DetalhesTopicosComponent,
    // DetalhesComponent,
    UsuarioDetalhesComponent,
    CursoComponent,
    ListaCursosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
