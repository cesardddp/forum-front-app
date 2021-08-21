import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './forum/cursos/cursos.component';
import { TopicoDetalheComponent } from './forum/cursos/topicos/topico-detalhe/topico-detalhe.component';
import { TopicosComponent } from './forum/cursos/topicos/topicos.component';

const routes: Routes = [
  { path:'', component: CursosComponent},
  { path:':cursoDoTopico', component: TopicosComponent},
  { path:':cursoDoTopico/:topicoId', component: TopicoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
