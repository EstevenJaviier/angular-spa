import {
  getHits,
  getHitsSuccess,
  getHitById,
  getHitsFailure,
} from './hit.actions';
import { HitEffects } from './hit.effects';
import { hitReducer } from './hit.reducer';
import { selectGetHitById, selectGetHits } from './hit.selector';

export const fromRoot = {
  getHits,
  getHitsSuccess,
  HitEffects,
  hitReducer,
  getHitById,
  getHitsFailure,
  selectGetHitById,
  selectGetHits,
};
