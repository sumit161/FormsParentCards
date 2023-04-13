import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToParentComponent } from './form-to-parent.component';

describe('FormToParentComponent', () => {
  let component: FormToParentComponent;
  let fixture: ComponentFixture<FormToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
