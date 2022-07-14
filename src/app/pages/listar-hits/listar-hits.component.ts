import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Hit } from 'src/app/interfaces/hit.interface';
import { fromRoot } from 'src/app/states/hits';
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

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ hits: HitState }>
  ) {
    this.store
      .pipe(
        takeUntil(this.destroy$),
        select((state) => state.hits),
        map(({ hits }) => hits)
      )
      .subscribe((data) => (this.hits = data));

    this.store
      .pipe(
        takeUntil(this.destroy$),
        select((state) => state.hits.isLoading)
      )
      .subscribe((data) => (this.isLoading = data));

    this.store
      .pipe(
        takeUntil(this.destroy$),
        select((state) => state.hits.error)
      )
      .subscribe((data) => (this.error = data));
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.q = params.get('q');
      this.store.dispatch(
        fromRoot.getHits({
          q: params.get('q'),
          category: params.get('category'),
        })
      );
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handlerTags(tags: string) {
    return tags?.split(',');
  }
}
