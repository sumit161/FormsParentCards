import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildTableComponent } from './viewchild-table.component';

describe('ViewchildTableComponent', () => {
  let component: ViewchildTableComponent;
  let fixture: ComponentFixture<ViewchildTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewchildTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
