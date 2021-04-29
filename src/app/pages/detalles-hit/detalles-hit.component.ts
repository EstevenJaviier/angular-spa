import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hit } from 'src/app/interfaces/hit.interface';
import { fromRoot } from 'src/app/states/hits';
import { HitState } from 'src/app/states/hits/hit.state';

@Component({
  templateUrl: './detalles-hit.component.html',
  styleUrls: ['./detalles-hit.component.css'],
})
export class DetallesHitComponent implements OnInit {
  hit$: Observable<{ hit: Hit }>;
  hit: Hit;
  imagenId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ hits: HitState }>
  ) {
    this.hit$ = this.store.select((state) => state.hits);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.imagenId = +params.get('id');
      this.store.dispatch(fromRoot.getHitById({ id: this.imagenId }));
    });

    this.hit$.subscribe((data) => {
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
