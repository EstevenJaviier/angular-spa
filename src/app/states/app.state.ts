import { HitState } from './hits/hit.state';
import { hitReducer } from './hits/hit.reducer';

export interface AppState {
  hit: HitState;
}

export const appReducer = {
  hit: hitReducer,
};
