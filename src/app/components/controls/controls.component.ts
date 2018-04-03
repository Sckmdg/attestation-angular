import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  @Output() addSlide: EventEmitter<any> = new EventEmitter();

  addHandler(): void {
    this.addSlide.emit(null);
  }

  constructor() { }
}
