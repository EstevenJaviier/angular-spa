import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HitState } from './hit.state';

const getHitState = createFeatureSelector<HitState>('hits');

export const selectGetHits = createSelector(
  getHitState,
  (hitState: HitState) => hitState.hits
);

export const selectGetHitById = createSelector(
  getHitState,
  (hitState: HitState) => hitState.hit
);

export const selectIsLoading = createSelector(
  getHitState,
  (hitState: HitState) => hitState.isLoading
);
