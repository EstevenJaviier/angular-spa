import { createSelector } from '@ngrx/store';
import { HitState } from './hit.reducer';

const getHits = (state: HitState) => state.hits;

export const getStateHit = createSelector(
  (state: { hitState: HitState }) => state.hitState,
  getHits
);
