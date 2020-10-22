import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieNavComponent } from './storie-nav.component';

describe('StorieNavComponent', () => {
  let component: StorieNavComponent;
  let fixture: ComponentFixture<StorieNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorieNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorieNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
