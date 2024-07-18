import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParentGuardianComponent } from './user-parent-guardian.component';

describe('UserParentGuardianComponent', () => {
  let component: UserParentGuardianComponent;
  let fixture: ComponentFixture<UserParentGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserParentGuardianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserParentGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
