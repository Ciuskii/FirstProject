import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
childCklickMe(numClick: number) {
 this.title = "Hai cliccato " + numClick + " volte";
}
  title = 'FirstProject';
  tooltipH1 = "FirstProject";
}
