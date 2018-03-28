import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlideService } from '../../../services/slide.service';
import { Slide} from "../../root-slide/slide";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentSlideId: number;
  slides: Slide[] = [];

  constructor(
    private route: ActivatedRoute,
    private slideService: SlideService,
  ) {}

  ngOnInit(): void {
    this.initCurrentSlide();
    this.getSlides();
  }

  getSlides(): void {
    this.slideService.getSlides()
      .subscribe(slides => this.slides = slides);
  }

  initCurrentSlide(): void {
    this.currentSlideId = this.slideService.getParamFromRoute(this.route, 'id');
  }

}
