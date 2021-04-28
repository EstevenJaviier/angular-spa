import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  formSearch: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      q: [null],
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
    this.router.navigate(['/'], {
      queryParams: {
        q: this.formSearch.get('q').value,
        category: this.formSearch.get('category').value,
      },
    });
  }
}
