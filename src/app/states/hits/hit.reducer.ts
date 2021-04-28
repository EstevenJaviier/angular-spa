import { Action, createReducer, on } from '@ngrx/store';
import { Hit } from 'src/app/interfaces/hit.interface';
import * as HitActions from './hit.actions';

export interface HitState {
  hits: Hit[];
}

export const initialState: HitState = {
  hits: [],
};

const _hitReducer = createReducer(
  initialState,
  on(HitActions.getHitsSuccess, (state, action) => ({ hits: action.hits }))
);

export function hitReducer(state: HitState | undefined, action: Action) {
  return _hitReducer(state, action);
}
