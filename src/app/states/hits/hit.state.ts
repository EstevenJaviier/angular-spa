import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Hit } from 'src/app/interfaces/hit.interface';

export interface HitState extends EntityState<Hit> {
  hits: Hit[];
  errMessage: string;
}

export const hitsAdapter = createEntityAdapter<Hit>({});

export const initialState: HitState = hitsAdapter.getInitialState({
  hits: [],
  errMessage: null,
});
