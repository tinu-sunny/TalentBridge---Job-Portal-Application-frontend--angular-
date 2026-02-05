import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlandingpage } from './userlandingpage';

describe('Userlandingpage', () => {
  let component: Userlandingpage;
  let fixture: ComponentFixture<Userlandingpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userlandingpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userlandingpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
