import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Slide } from "../root-slide/slide";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  @Input() slide: Slide;
  @Output() addSlide: EventEmitter<any> = new EventEmitter();
  isEdit: boolean;

  addHandler(): void {
    this.addSlide.emit(null);
  }

  toggleEditWindow(): void {
    this.isEdit = !this.isEdit;
  }

  closeEditWindow(): void {
    this.isEdit = false;
  }

  saveSlider(): void {
    console.log(this);
  }

  constructor() { }
}
