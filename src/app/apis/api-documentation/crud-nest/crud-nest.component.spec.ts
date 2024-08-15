import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNestComponent } from './crud-nest.component';

describe('CrudNestComponent', () => {
  let component: CrudNestComponent;
  let fixture: ComponentFixture<CrudNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudNestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
