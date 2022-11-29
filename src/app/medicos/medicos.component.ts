import { Component, OnInit } from '@angular/core';
import { Medico } from './medico.interface';
import { MedicoService } from './medico.service';

@Component({
  selector: 'medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
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
  }

  remove(medico: Medico) {
    this.medicoService.remove(medico).subscribe(
      () => this.list(),
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

}
