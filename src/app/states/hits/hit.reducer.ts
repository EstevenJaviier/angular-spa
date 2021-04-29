import { Action, createReducer, on } from '@ngrx/store';
import { Hit } from 'src/app/interfaces/hit.interface';
import * as HitActions from './hit.actions';

export interface HitState {
  hits: Hit[];
  errMessage: string;
}

export const initialState: HitState = {
  hits: [],
  errMessage: null,
};

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
