import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from '../second/second.component';
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';
import { contatto } from '../../models/contatto';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SecondComponent, ContactComponent, CommonModule]
})
export class AppComponent {
  title = 'FirstProject';
  tooltipH1 = "FirstProject";
  contatti: Array<contatto>;
  newContatto: contatto | undefined;

  childCklickMe(numClick: number) {
    this.title = "Hai cliccato " + numClick + " volte";
  }

  eliminaContatto(c: contatto) {
    let index  = this.contatti.indexOf(c);
    if (index > -1)
      this.contatti.splice(index, 1);
  }

  showAddContattoPannel() {
    this.newContatto = {
      nome: "",
      cognome: "",
      eta: new Date().getFullYear(),
      cellulare: ""
    }
  }

  saveContatto(c: contatto) {
    this.contatti.push(c);
  }
  
  constructor(){
    this.contatti = [
      {
        nome: "Fabio",
        cognome: "Casa",
        eta: 19,
        cellulare: "3922683333"
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
