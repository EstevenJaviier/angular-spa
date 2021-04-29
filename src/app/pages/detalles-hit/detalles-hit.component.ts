import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hit } from 'src/app/interfaces/hit.interface';
import { fromRoot } from 'src/app/states/hits';

@Component({
  templateUrl: './detalles-hit.component.html',
  styleUrls: ['./detalles-hit.component.css'],
})
export class DetallesHitComponent implements OnInit {
  hits$: Observable<any>;
  hit: Hit;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ hits: { hit: Hit } }>
  ) {
    this.hits$ = this.store.select((state) => state.hits);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.store.dispatch(fromRoot.getHitById({ id: +params.get('id') }));
    });

    this.hits$.subscribe((data) => {
      this.hit = data.hit;
      if (!this.hit) {
        this.router.navigate(['/'], { preserveFragment: true });
      }
    });
  }

  handlerTags(tags: string) {
    return tags?.split(',');
  }
}
