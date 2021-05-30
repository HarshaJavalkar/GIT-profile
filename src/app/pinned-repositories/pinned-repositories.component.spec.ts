import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedRepositoriesComponent } from './pinned-repositories.component';

describe('PinnedRepositoriesComponent', () => {
  let component: PinnedRepositoriesComponent;
  let fixture: ComponentFixture<PinnedRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinnedRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
