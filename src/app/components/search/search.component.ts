import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  formSearch: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map(({ target }: { target: HTMLInputElement }) => target.value.trim()),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.router.navigate(['/angular'], {
          queryParams: {
            q: value,
            category: this.formSearch.get('category').value,
          },
        });
      });
  }

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      q: [null, [Validators.maxLength(100)]],
      category: [null],
    });

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.formSearch.patchValue({
        q: params.get('q'),
        category: params.get('category'),
      });
    });
  }

  onSubmit() {
    const q = this.formSearch.get('q').value;
    if (q?.length > 100) {
      return alert('La busqueda debe ser de máximo 100 caracteres.');
    }

    this.router.navigate(['/angular'], {
      queryParams: {
        q: q,
        category: this.formSearch.get('category').value,
      },
    });
  }
}
