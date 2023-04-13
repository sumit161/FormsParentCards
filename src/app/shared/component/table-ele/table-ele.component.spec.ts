import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEleComponent } from './table-ele.component';

describe('TableEleComponent', () => {
  let component: TableEleComponent;
  let fixture: ComponentFixture<TableEleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
