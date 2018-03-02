import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  // para importar um valor do componente pai que nesse caso é o (data-binding-event-component.html)
  @Input() valor: number = 0;
  valorMaximo: number = 10;
  valorMinimo: number = -9;

  // expor um evento a outros componentes. Emitter -> emissor de evento
  @Output() mudouValor = new EventEmitter();


  // recuperando elementos html atraves da variavel declarada do component
  // ViewChild é para recuperar a arvore de componentes HTML utilizando o mesmo nome da variavel que foi declarada no componente,
  // ElementRef é o objeto que é retornado, para saber qual é o componente correto, usa-se o tipo HtmlElement
  @ViewChild('variavelDoComponente') componenteHtmlRecuperado: ElementRef;

  incrementa() {
    console.log(this.componenteHtmlRecuperado);
    if (this.valor < this.valorMaximo) {
    this.valor++;
    }
    this.mudouValor.emit({novoValor: "O botão + foi clicado e foi incrementado uma unidade no seu valor. Seu valor atual é: " + this.valor});
  }

  decrementa() {
    if (this.valor > this.valorMinimo) {
    this.valor--;
    }
    this.mudouValor.emit({novoValor: "O botão - foi clicado e foi decrementado uma unidade no seu valor. Seu valor atual é: " + this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
