import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesViewComponent } from './directives-view.component';

describe('DirectivesViewComponent', () => {
  let component: DirectivesViewComponent;
  let fixture: ComponentFixture<DirectivesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
