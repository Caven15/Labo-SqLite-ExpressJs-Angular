import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUtilisateurComponent } from './register-utilisateur.component';

describe('RegisterUtilisateurComponent', () => {
  let component: RegisterUtilisateurComponent;
  let fixture: ComponentFixture<RegisterUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
