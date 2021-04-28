import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesHitComponent } from './pages/detalles-hit/detalles-hit.component';
import { ListarHitsComponent } from './pages/listar-hits/listar-hits.component';

const routes: Routes = [
  { path: '', component: ListarHitsComponent },
  { path: ':id', component: DetallesHitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
