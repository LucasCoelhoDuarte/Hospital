import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente.interface';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.pacienteService.getPacientes().subscribe(
      (pacientes) => {
        this.pacientes = pacientes;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(paciente: Paciente) {
    this.pacienteService.remove(paciente).subscribe(
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
