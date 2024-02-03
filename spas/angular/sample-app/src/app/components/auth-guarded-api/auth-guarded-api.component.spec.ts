import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardedApiComponent } from './auth-guarded-api.component';

describe('AuthGuardedApiComponent', () => {
  let component: AuthGuardedApiComponent;
  let fixture: ComponentFixture<AuthGuardedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthGuardedApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthGuardedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
