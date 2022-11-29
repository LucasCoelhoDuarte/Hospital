import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCadastroComponent } from './pacientes-cadastro.component';

describe('PacientesCadastroComponent', () => {
  let component: PacientesCadastroComponent;
  let fixture: ComponentFixture<PacientesCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
