import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doenca } from '../doencas/doenca.interface';
import { DoencaService } from '../doencas/doenca.service';

@Component({
  selector: 'doencas-cadastro',
  templateUrl: './doencas-cadastro.component.html',
  styleUrls: ['./doencas-cadastro.component.css']
})
export class DoencasCadastroComponent implements OnInit {

  doencaForm: FormGroup = this.formBuilder.group({
    id: 0,
    doenca: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    area_afetada: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    tratamento: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    nivel_perigo: 0,
    descricao: [
      '',
      [Validators.minLength(3), Validators.maxLength(300)],
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private doencaService: DoencaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.doencaService.getDoenca(id).subscribe((doenca) => {
        this.doencaForm.patchValue(doenca);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.doencaForm.valid);
    console.log(this.doencaForm.value);

    const doenca: Doenca = this.doencaForm.value;

    if (doenca.id) {
      this.doencaService.update(doenca).subscribe(() => this.redirect());
    } else {
      this.doencaService.save(doenca).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listagem-doencas']);
  }

}
