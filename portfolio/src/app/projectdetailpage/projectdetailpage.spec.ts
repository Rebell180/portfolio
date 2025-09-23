import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectdetailpage } from './projectdetailpage';

describe('Projectdetailpage', () => {
  let component: Projectdetailpage;
  let fixture: ComponentFixture<Projectdetailpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectdetailpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectdetailpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
