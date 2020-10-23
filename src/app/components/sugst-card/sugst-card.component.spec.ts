import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugstCardComponent } from './sugst-card.component';

describe('SugstCardComponent', () => {
  let component: SugstCardComponent;
  let fixture: ComponentFixture<SugstCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugstCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugstCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
