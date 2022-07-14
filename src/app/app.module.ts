import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ListarHitsComponent } from './pages/listar-hits/listar-hits.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetallesHitComponent } from './pages/detalles-hit/detalles-hit.component';

import { fromRoot } from './states/hits';
import { ImgLazyDirective } from './core/directives/img-lazy.directive';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ListarHitsComponent,
    SearchComponent,
    NavbarComponent,
    DetallesHitComponent,
    ImgLazyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forRoot({ hits: fromRoot.hitReducer }),
    EffectsModule.forRoot([fromRoot.HitEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
