import { Component, OnInit, DoCheck } from '@angular/core';
import { Slide} from "../../root-slide/slide";
import {SlideService} from "../../../services/slide.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {
  currentSlideId: number;
  slides: Slide[] = [];

  constructor(
    private router: Router,
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

  delete(slide: Slide): void {
    this.slides = this.slides.filter(h => h !== slide);
    this.slideService.deleteSlide(slide).subscribe();
    if (slide.id === this.currentSlideId) {
      if (slide.id === this.slides.length) {
        this.router.navigate([`/slide/${slide.id - 1}`]);
      }
      else this.router.navigate([`/slide/${slide.id + 1}`]);
    }
  }

}
