import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ListarHitsComponent } from './pages/listar-hits/listar-hits.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetallesHitComponent } from './pages/detalles-hit/detalles-hit.component';

import { fromRoot } from './states/hits';

@NgModule({
  declarations: [
    AppComponent,
    ListarHitsComponent,
    SearchComponent,
    NavbarComponent,
    DetallesHitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ hits: fromRoot.hitReducer }),
    EffectsModule.forRoot([fromRoot.HitEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}