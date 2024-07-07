import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsViewComponent } from './components-view.component';

describe('ComponentsViewComponent', () => {
  let component: ComponentsViewComponent;
  let fixture: ComponentFixture<ComponentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
