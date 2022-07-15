import { HitState } from './hits/hit.state';
import { hitReducer } from './hits/hit.reducer';

export interface AppState {
  hits: HitState;
}

export const appReducer = {
  hits: hitReducer,
};
