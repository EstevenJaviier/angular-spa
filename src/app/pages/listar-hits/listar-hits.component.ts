import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Hit } from 'src/app/interfaces/hit.interface';
import { getHits } from 'src/app/states/hits/hit.actions';
import {
  selectGetHits,
  selectIsLoading,
} from 'src/app/states/hits/hit.selector';
import { HitState } from 'src/app/states/hits/hit.state';

@Component({
  templateUrl: './listar-hits.component.html',
  styleUrls: ['./listar-hits.component.css'],
})
export class ListarHitsComponent implements OnInit, OnDestroy {
  q: string;

  hits: Hit[];

  isLoading: boolean;

  destroy$ = new Subject();

  error: string;

  constructor(private route: ActivatedRoute, private store: Store<HitState>) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.q = params.get('q');
      this.store.dispatch(
        getHits({
          q: params.get('q'),
          category: params.get('category'),
        })
      );
    });

    this.store
      .pipe(takeUntil(this.destroy$))
      .pipe(select(selectGetHits))
      .subscribe((data) => (this.hits = data));

    this.store
      .pipe(takeUntil(this.destroy$))
      .pipe(select(selectIsLoading))
      .subscribe((data) => (this.isLoading = data));

    this.store
      .pipe(
        takeUntil(this.destroy$),
        select((state) => state.error)
      )
      .subscribe((data) => (this.error = data));
  }

  handlerTags(tags: string) {
    return tags?.split(',');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
