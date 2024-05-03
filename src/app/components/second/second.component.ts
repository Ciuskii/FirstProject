import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  @Output()
  clickMe: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  parentName: string  = '';

  nome: string = "Fabio";

  private numclick = 0;
  clickMeHandler() {
    this.numclick++;
    // this.title = "Hai cliccato " + this.numclick + " volte";
    this.clickMe.emit(this.numclick);
  }

  clickToChangeTooltip(){
    // this.tooltipH1 = "cambiato";
  }
}
