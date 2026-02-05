import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobaddpage } from './jobaddpage';

describe('Jobaddpage', () => {
  let component: Jobaddpage;
  let fixture: ComponentFixture<Jobaddpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobaddpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobaddpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
