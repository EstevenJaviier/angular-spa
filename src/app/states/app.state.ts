import { HitState } from './hits/hit.state';
import { hitReducer } from './hits/hit.reducer';
import { HIT_STATE_NAME } from './hits/hit.selector';
import { HitEffects } from './hits/hit.effects';

export interface AppState {
  [HIT_STATE_NAME]: HitState;
}

export const appReducer = {
  [HIT_STATE_NAME]: hitReducer,
};

export const appEffects = [HitEffects];
