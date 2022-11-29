import { Component, OnInit } from '@angular/core';
import { Doenca } from './doenca.interface';
import { DoencaService } from './doenca.service';

@Component({
  selector: 'doencas',
  templateUrl: './doencas.component.html',
  styleUrls: ['./doencas.component.css']
})
export class DoencasComponent implements OnInit {

  doencas: Doenca[] = [];

  constructor(private doencaService: DoencaService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
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
  }

  remove(doenca: Doenca) {
    this.doencaService.remove(doenca).subscribe(
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
