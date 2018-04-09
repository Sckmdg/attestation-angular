import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Slide } from '../../root-slide/slide';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() currentSlideId: number;
  @Input() slides: Slide[];
  @Output() deleteSlide: EventEmitter<Slide> = new EventEmitter<Slide>();

  deleteHandler(slide: Slide): void {
    this.deleteSlide.emit(slide);
  }

  constructor() {}
}
