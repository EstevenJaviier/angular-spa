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

export const getOneHits = createAction(
  '[Hits] Get One Hits',
  props<{ id: number }>()
);

export const getHitsOneSuccess = createAction(
  '[Hits] Get One Hit Success',
  props<{ hits: Hit[] }>()
);
