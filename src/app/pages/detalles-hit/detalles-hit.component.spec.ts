import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHitComponent } from './detalles-hit.component';

describe('DetallesHitComponent', () => {
  let component: DetallesHitComponent;
  let fixture: ComponentFixture<DetallesHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesHitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
