import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEleComponent } from './form-ele.component';

describe('FormEleComponent', () => {
  let component: FormEleComponent;
  let fixture: ComponentFixture<FormEleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
