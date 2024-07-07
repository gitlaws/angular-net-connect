import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesViewComponent } from './pipes-view.component';

describe('PipesViewComponent', () => {
  let component: PipesViewComponent;
  let fixture: ComponentFixture<PipesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
