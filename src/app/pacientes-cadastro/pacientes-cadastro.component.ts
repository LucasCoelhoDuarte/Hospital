import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../pacientes/paciente.interface';
import { PacienteService } from '../pacientes/paciente.service';

// Select Paciente e Doença
import { Medico } from '../medicos/medico.interface';
import { MedicoService } from '../medicos/medico.service';
import { Doenca } from '../doencas/doenca.interface';
import { DoencaService } from '../doencas/doenca.service';

@Component({
  selector: 'pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent implements OnInit {

  // Select Paciente e Doença
  medicos: Medico[] = [];
  doencas: Doenca[] = [];

  pacienteForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    cpf: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    nascimento: '2000-01-01',
    medico_responsavel: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    doenca: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

    private medicoService: MedicoService,
    private doencaService: DoencaService,
  ) { }

  ngOnInit(): void {
    // Select Médico e Doença
    this.medicoService.getMedicos().subscribe(
      (medicos) => {
        this.medicos = medicos;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
    this.doencaService.getDoencas().subscribe(
      (doencas) => {
        this.doencas = doencas;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );

    const id = +this.activatedRoute.snapshot.params['id'];
    
    if (id) {
      this.pacienteService.getPaciente(id).subscribe((paciente) => {
        this.pacienteForm.patchValue(paciente);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.pacienteForm.valid);
    console.log(this.pacienteForm.value);

    const paciente: Paciente = this.pacienteForm.value;

    if (paciente.id) {
      this.pacienteService.update(paciente).subscribe(() => this.redirect());
    } else {
      this.pacienteService.save(paciente).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listagem-pacientes']);
  }

}
