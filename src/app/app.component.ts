import {Component, OnDestroy, OnInit} from '@angular/core';
import { Slide } from "./components/root-slide/slide";
import { SlideService } from "./services/slide.service";
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  currentSlideId: number;
  slides: Slide[] = [];

  constructor(
    private router: Router,
    private slideService: SlideService
  ) {}

  ngOnInit(): void {
    this.getSlides();

    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.currentSlideId = Number(event.state.root.firstChild.params.id);
      }
    })
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }

  getSlides(): void {
    this.slides = this.slideService.getSlides()
  }

  onDeleteSlide(slide: Slide): void {
    this.slides = this.slideService.deleteSlide(slide);

    if (slide.id === this.currentSlideId) {
      this.router.navigate([`/slide/${this.slides[0].id}`]);
    }
  }

  onAddSlide(): void {
    const newId = this.slides[this.slides.length - 1].id + 1;
    const defaultSlide = {
      id: newId,
      title: `Test${newId}`,
      template: `test${newId}`
    };

    this.slides = this.slideService.addSlide(defaultSlide)
  }

  onEditSlide(slide: Slide): void {
    this.slideService.updateSlide(slide)
  }
}
/*
  TODO
  2) Connect additional js lib to project (spinner for example)
  3) Change styles
  4) Add info to slides
*/
