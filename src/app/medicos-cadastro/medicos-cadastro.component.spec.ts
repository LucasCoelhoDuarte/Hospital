import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosCadastroComponent } from './medicos-cadastro.component';

describe('MedicosCadastroComponent', () => {
  let component: MedicosCadastroComponent;
  let fixture: ComponentFixture<MedicosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
