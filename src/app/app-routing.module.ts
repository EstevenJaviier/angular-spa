import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { DetallesHitComponent } from './pages/detalles-hit/detalles-hit.component';
import { ListarHitsComponent } from './pages/listar-hits/listar-hits.component';

const routes: Routes = [
  {
    path: 'angular',
    children: [
      { path: '', component: ListarHitsComponent },
      { path: ':id', component: DetallesHitComponent },
      { path: '**', component: EmptyRouteComponent },
    ],
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
