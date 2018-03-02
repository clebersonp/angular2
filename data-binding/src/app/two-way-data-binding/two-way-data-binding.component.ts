import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome: string = "digite seu nome";

  // objeto pessoa
  pessoa: any = {
    nome: 'Nome',
    idade: 25,
  }

}
