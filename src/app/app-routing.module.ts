import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheNoticiaComponent } from './detalhe-noticia/detalhe-noticia.component';

const routes: Routes = [
  { path: 'detalhes', component: DetalheNoticiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
