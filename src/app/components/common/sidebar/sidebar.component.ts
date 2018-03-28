import { Component, OnInit, DoCheck } from '@angular/core';
import { Slide} from "../../root-slide/slide";
import {SlideService} from "../../../services/slide.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {
  currentSlideId: number;
  slides: Slide[] = [];

  constructor(
    private slideService: SlideService,
  ) {}

  ngOnInit(): void {
    this.currentSlideId = this.slideService.routerHack();
    this.getSlides();
  }

  ngDoCheck(): void {
    const id = this.slideService.routerHack();;

    if (id !== this.currentSlideId) {
      this.currentSlideId = id;
    }
  };

  getSlides(): void {
    this.slideService.getSlides()
      .subscribe(slides => this.slides = slides);
  }

}
