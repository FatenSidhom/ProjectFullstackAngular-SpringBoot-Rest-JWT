import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordForAdminComponent } from './dashbord-for-admin.component';

describe('DashbordForAdminComponent', () => {
  let component: DashbordForAdminComponent;
  let fixture: ComponentFixture<DashbordForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
