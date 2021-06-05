import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContriutionsComponent } from './contriutions.component';

describe('ContriutionsComponent', () => {
  let component: ContriutionsComponent;
  let fixture: ComponentFixture<ContriutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContriutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContriutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
