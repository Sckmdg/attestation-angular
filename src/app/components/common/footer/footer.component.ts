import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() currentSlideId: number;
  @Input() slides: number;
  spinner = false;

  constructor(
    private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  beCool(): void {
    this.spinner = !this.spinner;
  }
}
