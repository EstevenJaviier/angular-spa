import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
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
      mergeMap((action) => {
        return this.pixabayService
          .getImagenesByQuery({ q: action.q, category: action.category })
          .pipe(
            map((data) => HitActions.getHitsSuccess({ hits: data.hits })),
            catchError((error) =>
              of(HitActions.getHitsFailure({ errMessage: error.message }))
            )
          );
      })
    )
  );
}
