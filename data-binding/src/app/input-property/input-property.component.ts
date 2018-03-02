import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

// expor a propriedade chamada nome para outros components
// externamente o input property sera chamado por nome, e internamete nessa classe sera chamada de nomeDoCurso
  @Input('nome') nomeDoCurso: string = "";

  constructor() { }

  ngOnInit() {
  }

}
