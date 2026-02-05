import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobviewpage } from './jobviewpage';

describe('Jobviewpage', () => {
  let component: Jobviewpage;
  let fixture: ComponentFixture<Jobviewpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobviewpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobviewpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
