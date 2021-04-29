import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HitState } from './hit.state';

const getHitState = createFeatureSelector<HitState>('hits');

export const selectGetHits = createSelector(
  (state: { hitState: HitState }) => state.hitState,
  getHitState
);

export const selectGetHitById = createSelector(
  (state: { hitState: HitState }, props: any) => {
    return state.hitState.hits.find((hit) => hit.id === props.id);
  },
  getHitState
);
