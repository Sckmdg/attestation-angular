import {AfterContentChecked, Component, EventEmitter, Input, Output} from '@angular/core';
import { Slide } from "../root-slide/slide";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements AfterContentChecked {
  @Input() slide: Slide;
  @Output() addSlide: EventEmitter<any> = new EventEmitter();
  @Output() editSlide: EventEmitter<Slide> = new EventEmitter<Slide>();
  isEdit: boolean;
  slideCopy: Slide;

  ngAfterContentChecked(): void {
    if (!this.slideCopy) this.slideCopy = this.slide
  }

  addHandler(): void {
    this.addSlide.emit(null);
  }

  toggleEditWindow(value: boolean): void {
    this.isEdit = value
  }

  closeEditWindow(): void {
    this.toggleEditWindow(false);
    this.slide = this.slideCopy;
  }

  saveSlider(): void {
    this.toggleEditWindow(false);
    this.slideCopy = this.slide;
    this.editSlide.emit(this.slide);
  }

  constructor() { }
}
