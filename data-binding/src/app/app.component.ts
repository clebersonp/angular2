import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  valor: number = 7;
  destroiComponente: boolean = false;

  onClickMudarValor() {
    this.valor++;
  }

  onClickDestruir() {
    this.destroiComponente = true;
  }

}
