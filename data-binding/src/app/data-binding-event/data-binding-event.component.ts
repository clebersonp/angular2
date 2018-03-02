import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-event',
  templateUrl: './data-binding-event.component.html',
  styleUrls: ['./data-binding-event.component.css']
})
export class DataBindingEventComponent implements OnInit {

  public teclaPressionada: string = '';
  public salvaValor: string = '';
  public keyPress: string = '';
  public isMouseOver: boolean = false;
  public novoValor = "";

  valorInicial: number = 8;

  salvarValorKeyPress(value: string) {
    this.keyPress = value.toLowerCase();
  }

  cliclarBotao(evento) {
    console.log();
      alert('Botão cliclado');
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento);
    this.teclaPressionada = (<HTMLInputElement>evento.target).value.toUpperCase();
  }

  salvarValorOnBlur(evento) {
    (<HTMLInputElement>evento.target).value = (<HTMLInputElement>evento.target).value.toUpperCase();
  }

  salvarValor(valor) {
    this.salvaValor = valor;
  }

// recuperando o evento do emissor -> output-property-component.ts
  onMudouValor(evento) {
    // recuperando o valor novoValor do objeto evento
    console.log(evento.novoValor);
    this.novoValor = evento.novoValor;
    
  }

  constructor() { }

  ngOnInit() {
  }

}
