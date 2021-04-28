import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { PixabayService } from '../../services/pixabay.service';
import * as HitActions from './hit.actions';

@Injectable()
export class HitEffects {
  constructor(
    private actions$: Actions,
    private pixabayService: PixabayService
  ) {}

  loadHits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HitActions.getHits),
      tap(() => console.log('Get Hits Start')),
      mergeMap((action) => {
        console.log('Get Hits Process');
        return this.pixabayService
          .getImagenesByQuery({ q: action.q, category: action.category })
          .pipe(
            map((data) => HitActions.getHitsSuccess({ hits: data.hits })),
            catchError(() => EMPTY),
            tap(() => console.log('Get Hits End'))
          );
      })
    )
  );
}
