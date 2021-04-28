import { getHits, getHitsSuccess } from './hit.actions';
import { HitEffects } from './hit.effects';
import { hitReducer } from './hit.reducer';
import { getStateHit } from './hit.selector';

export const fromRoot = {
  getHits,
  getHitsSuccess,
  HitEffects,
  hitReducer,
  getStateHit,
};
