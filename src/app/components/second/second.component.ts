import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contatto } from '../../models/contatto';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  //#region "Private"
    private numclick = 0;
  //#endregion

  //#region "Public"
    nome: string = "Fabio";
    divEsisto: boolean = true;
    contatti: Array<contatto>;
    @Output()
    clickMe: EventEmitter<number> = new EventEmitter<number>();
    @Input()
    parentName: string  = '';
  //#endregion
  
  clickMeHandler() {
    this.numclick++;
    // this.title = "Hai cliccato " + this.numclick + " volte";
    this.clickMe.emit(this.numclick);
  }

  clickToChangeTooltip(){
    // this.tooltipH1 = "cambiato";
  }

  toggleDivEsisto() {
    this.divEsisto = !this.divEsisto;
  }

  constructor(){
    this.contatti = [
      {
        nome: "Fabio",
        cognome: "Casa",
        eta: 19,
        cellulare: "3922685456"
      },
      {
        nome: "Pippo",
        cognome: "Casa",
        eta: 35,
        cellulare: "3922685555"
      },
      {
        nome: "Pluto",
        cognome: "Casa",
        eta: 75,
        cellulare: "3922684444"
      },
      {
        nome: "Mario",
        cognome: "Rossi",
        eta: 12,
        cellulare: "3922686666"
      }
    ];
  }
}
