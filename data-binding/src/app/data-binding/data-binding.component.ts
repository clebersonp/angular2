import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  private name: string = "Cleberson Pedreira Pauluci";

  isAngularFacil: boolean = true;

  urlImagem: string = "http://lorempixel.com/400/200/animals/";

  nomeCurso: string = "Angular passado via Decorator @Input() -> Input Property";

  constructor() { }

  ngOnInit() {
  }

  getName() {
    return this.name;
  }

  getCurtirCursoAngular() {
    return true;
  }

  getNumeroParaSoma() {
    return 41;
  }

  getImagem() {
    return this.urlImagem;
  }

}
