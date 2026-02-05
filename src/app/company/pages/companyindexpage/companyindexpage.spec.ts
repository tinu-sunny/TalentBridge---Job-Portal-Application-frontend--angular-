import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Companyindexpage } from './companyindexpage';

describe('Companyindexpage', () => {
  let component: Companyindexpage;
  let fixture: ComponentFixture<Companyindexpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Companyindexpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Companyindexpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
