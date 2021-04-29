import { Action, createReducer, on } from '@ngrx/store';
import * as HitActions from './hit.actions';
import { HitState, initialState } from './hit.state';

const _hitReducer = createReducer(
  initialState,
  on(HitActions.getHitsSuccess, (state, action) => ({
    ...state,
    hits: action.hits,
  })),
  on(HitActions.getHitsFailure, (state, action) => ({
    ...state,
    errMessage: action.errMessage,
  }))
);

export function hitReducer(state: HitState | undefined, action: Action) {
  return _hitReducer(state, action);
}
