import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private slideService: SlideService,
  ) {}

  ngOnInit(): void {
    this.currentSlideId = this.routerHack();
    this.getSlides();
  }

  ngDoCheck(): void {
    const id = this.routerHack();;

    if (id !== this.currentSlideId) {
      this.currentSlideId = id;
    }
  };

  getSlides(): void {
    this.slideService.getSlides()
      .subscribe(slides => this.slides = slides);
  }

  routerHack(): number {
    const slashIndex = location.pathname.lastIndexOf('/') + 1;
    const id = Number(location.pathname.slice(slashIndex, location.pathname.length));
    return id
  }

}
