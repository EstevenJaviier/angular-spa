import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Hit } from 'src/app/interfaces/hit.interface';
import { getHitById } from 'src/app/states/hits/hit.actions';
import { selectGetHitById } from 'src/app/states/hits/hit.selector';
import { HitState } from 'src/app/states/hits/hit.state';

@Component({
  templateUrl: './detalles-hit.component.html',
  styleUrls: ['./detalles-hit.component.css'],
})
export class DetallesHitComponent implements OnInit, OnDestroy {
  hit: Hit;

  imagenId: number;

  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<HitState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.imagenId = +params.get('id');
        this.store.dispatch(getHitById({ id: this.imagenId }));
      });

    this.store
      .pipe(takeUntil(this.destroy$))
      .pipe(select(selectGetHitById))
      .subscribe((data) => {
        this.hit = data;
        !this.hit && this.router.navigate(['/'], { preserveFragment: true });
      });
  }

  handlerTags(tags: string) {
    return tags?.split(',');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
