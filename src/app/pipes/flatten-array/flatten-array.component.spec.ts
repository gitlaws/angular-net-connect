import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlattenArrayComponent } from './flatten-array.component';

describe('FlattenArrayComponent', () => {
  let component: FlattenArrayComponent;
  let fixture: ComponentFixture<FlattenArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlattenArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlattenArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
