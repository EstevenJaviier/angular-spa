import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hit } from 'src/app/interfaces/hit.interface';

@Component({
  templateUrl: './detalles-hit.component.html',
  styleUrls: ['./detalles-hit.component.css'],
})
export class DetallesHitComponent implements OnInit {
  hits: Array<Hit>;
  hit: Hit;

  hits$: Observable<Hit[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ hits: Hit[] }>
  ) {
    this.hits$ = this.store.select((state) => state.hits);
  }

  ngOnInit(): void {
    this.hits$.subscribe((data: any) => (this.hits = data.hits));

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.hit = this.hits.find((hit) => hit.id === +params.get('id'));

      if (!this.hit) {
        this.router.navigate(['/']);
      }
    });
  }

  handlerTags(tags: string) {
    return tags.split(',');
  }
}
