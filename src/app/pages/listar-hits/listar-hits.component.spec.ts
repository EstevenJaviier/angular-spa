import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHitsComponent } from './listar-hits.component';

describe('ListarHitsComponent', () => {
  let component: ListarHitsComponent;
  let fixture: ComponentFixture<ListarHitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarHitsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
