import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { UserComponent } from './user/user.component';
import { CursosComponent } from './forum/cursos/cursos.component';
import { TopicosComponent } from './forum/cursos/topicos/topicos.component';
import { TopicoDetalheComponent } from './forum/cursos/topicos/topico-detalhe/topico-detalhe.component';

// //material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// lists
import {MatListModule} from '@angular/material/list';
// icons
import {MatIconModule} from '@angular/material/icon';
// buttons
import {MatButtonModule} from '@angular/material/button';
// toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
// form
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatDialogModule } from '@angular/material/dialog';
// tree
// import {MatTreeModule} from '@angular/material/tree'; 
// menu
import { MatMenuModule } from '@angular/material/menu'; 

// interceptor and httpclient
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/services/jwt.interceptor';

// forms
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TopicoFormDialogComponent } from './forum/cursos/topicos/topico-form-dialog/topico-form-dialog.component';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';

import { LoginComponent } from './user/login/login.component';
import { UpdateFormDialogComponent } from './forum/cursos/topicos/topico-detalhe/update-form-dialog/update-form-dialog.component';
import { DeleteFormDialogComponent } from './forum/cursos/topicos/topico-detalhe/delete-form-dialog/delete-form-dialog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UserComponent,
    CursosComponent,
    TopicosComponent,
    TopicoDetalheComponent,
    TopicoFormDialogComponent,
    LoginComponent,
    UpdateFormDialogComponent,
    DeleteFormDialogComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule ,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    TextFieldModule
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
