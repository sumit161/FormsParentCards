import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViechildComponent } from './form-viechild.component';

describe('FormViechildComponent', () => {
  let component: FormViechildComponent;
  let fixture: ComponentFixture<FormViechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormViechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormViechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
