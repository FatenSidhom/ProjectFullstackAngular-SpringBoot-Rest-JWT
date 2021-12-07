import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryCardComponent } from './add-category-card.component';

describe('AddCategoryCardComponent', () => {
  let component: AddCategoryCardComponent;
  let fixture: ComponentFixture<AddCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
