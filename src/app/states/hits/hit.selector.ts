import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HitState } from './hit.state';

export const HIT_STATE_NAME = 'hits';

const getHitState = createFeatureSelector<HitState>(HIT_STATE_NAME);

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
