import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medicos/medico.interface';
import { MedicoService } from '../medicos/medico.service';

@Component({
  selector: 'medicos-cadastro',
  templateUrl: './medicos-cadastro.component.html',
  styleUrls: ['./medicos-cadastro.component.css']
})
export class MedicosCadastroComponent implements OnInit {
  medicoForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    especialidade: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    cpf: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    estado_civil: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    nascimento: '2000-01-01',
  });

  constructor(
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.medicoService.getMedico(id).subscribe((medico) => {
        this.medicoForm.patchValue(medico);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.medicoForm.valid);
    console.log(this.medicoForm.value);

    const medico: Medico = this.medicoForm.value;

    if (medico.id) {
      this.medicoService.update(medico).subscribe(() => this.redirect());
    } else {
      this.medicoService.save(medico).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listagem-medicos']);
  }

}
