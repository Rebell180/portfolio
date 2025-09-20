import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wavebtn } from './wavebtn';

describe('Wavebtn', () => {
  let component: Wavebtn;
  let fixture: ComponentFixture<Wavebtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wavebtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wavebtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
