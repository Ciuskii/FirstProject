import { Component, EventEmitter, Input, Output } from '@angular/core';
import { contatto } from '../../models/contatto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() //[]
  contatto: contatto | undefined;
  @Input()
  isViewMode: boolean = true;
  @Output() //()
  eliminaMe: EventEmitter<contatto> = new EventEmitter<contatto>();
  @Output()
  save: EventEmitter<contatto> = new EventEmitter<contatto>();

  modifica() {
    this.isViewMode = false;
  }

  elimina() {
    this.eliminaMe.emit(this.contatto);
  }

  saveHandler() {
    this.isViewMode = true;
    this.save.emit(this.contatto);
  }

  annullaHandler() {
    this.isViewMode = true;
  }
}
