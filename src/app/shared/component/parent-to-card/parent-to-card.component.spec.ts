import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToCardComponent } from './parent-to-card.component';

describe('ParentToCardComponent', () => {
  let component: ParentToCardComponent;
  let fixture: ComponentFixture<ParentToCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentToCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
