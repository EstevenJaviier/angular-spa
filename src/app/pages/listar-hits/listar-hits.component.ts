import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hit } from 'src/app/interfaces/hit.interface';
import { fromRoot } from 'src/app/states/hits';
import { HitState } from 'src/app/states/hits/hit.state';

@Component({
  templateUrl: './listar-hits.component.html',
  styleUrls: ['./listar-hits.component.css'],
})
export class ListarHitsComponent implements OnInit {
  q: string;
  hits$: Observable<{ hits: Hit[] }>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ hits: HitState }>
  ) {
    this.hits$ = this.store.select((state) => state.hits);
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

  handlerTags(tags: string) {
    return tags?.split(',');
  }
}
