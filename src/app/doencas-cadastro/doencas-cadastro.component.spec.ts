import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencasCadastroComponent } from './doencas-cadastro.component';

describe('DoencasCadastroComponent', () => {
  let component: DoencasCadastroComponent;
  let fixture: ComponentFixture<DoencasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoencasCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoencasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
