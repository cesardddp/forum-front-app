import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './views/curso/curso.component';
import { DetalhesTopicosComponent } from './views/home/detalhes-topicos/detalhes-topicos.component';
import { HomeComponent } from './views/home/home.component';
import { UsuarioDetalhesComponent } from './views/usuario/usuario-detalhes/usuario-detalhes.component';

const routes: Routes = [
  {
    path:'',
    component: CursoComponent
  },
  {
    path:'topico/:id',
    component: DetalhesTopicosComponent,
  },
  {
    path:'topicos/:curso',
    component: HomeComponent,
  },
  {
    path:'usuario/:id',
    component: UsuarioDetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
