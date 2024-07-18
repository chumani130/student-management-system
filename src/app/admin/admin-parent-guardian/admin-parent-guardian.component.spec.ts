import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParentGuardianComponent } from './admin-parent-guardian.component';

describe('AdminParentGuardianComponent', () => {
  let component: AdminParentGuardianComponent;
  let fixture: ComponentFixture<AdminParentGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminParentGuardianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminParentGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
