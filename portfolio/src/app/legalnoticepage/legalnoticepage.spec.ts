import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Legalnoticepage } from './legalnoticepage';

describe('Legalnoticepage', () => {
  let component: Legalnoticepage;
  let fixture: ComponentFixture<Legalnoticepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Legalnoticepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Legalnoticepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
