import { createAction, props } from '@ngrx/store';
import { Hit } from 'src/app/interfaces/hit.interface';

export const getHits = createAction(
  '[Hits] Get Hits',
  props<{ q: string; category: string }>()
);

export const getHitsSuccess = createAction(
  '[Hits] Get Hit Success',
  props<{ hits: Hit[] }>()
);

export const getHitsFailure = createAction(
  '[Hits] Get Hit Failure',
  props<{ error: string }>()
);

export const getHitById = createAction(
  '[Hits] Get Hit By Id',
  props<{ id: number }>()
);
