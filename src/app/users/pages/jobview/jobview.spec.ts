import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobview } from './jobview';

describe('Jobview', () => {
  let component: Jobview;
  let fixture: ComponentFixture<Jobview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
