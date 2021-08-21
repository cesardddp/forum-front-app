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

// interceptor and httpclient
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/services/jwt.interceptor';

// forms
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UserComponent,
    CursosComponent,
    TopicosComponent,
    TopicoDetalheComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
