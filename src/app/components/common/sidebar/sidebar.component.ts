import {Component, Input} from '@angular/core';
import { Slide} from "../../root-slide/slide";
import { SlideService } from "../../../services/slide.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() currentSlideId: number;
  @Input() slides: Slide[];

  constructor(
    private slideService: SlideService,
    private router: Router) {}

  deleteSlide(slide: Slide): void {
    this.slides = this.slides.filter(h => h !== slide);
    this.slideService.deleteSlide(slide).subscribe();
    if (slide.id === this.currentSlideId) {
      this.router.navigate([`/slide/${this.slides[0].id}`]);
    }
  }

}
