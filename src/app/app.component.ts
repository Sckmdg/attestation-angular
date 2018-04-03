import {Component, OnInit} from '@angular/core';
import { Slide } from "./components/root-slide/slide";
import { SlideService } from "./services/slide.service";
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentSlideId: number;
  slides: Slide[] = [];

  constructor(
    private router: Router,
    private slideService: SlideService
  ) {}

  ngOnInit(): void {
    console.log('init', this);
    this.getSlides();

    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
       this.currentSlideId = Number(event.state.root.firstChild.params.id);
      }
    })

  }

  getSlides(): void {
    this.slideService.getSlides()
      .subscribe(slides => this.slides = slides);
  }

  onDeleteSlide(slide: Slide):void {
    this.slides = this.slides.filter(h => h !== slide);
    this.slideService.deleteSlide(slide).subscribe();

    if (slide.id === this.currentSlideId) {
      this.router.navigate([`/slide/${this.slides[0].id}`]);
    }
  }
}
/*
  TODO
  1) Add slides functional
  2) Edit slides functional
  3) Connect additional js lib to project (spinner for example)
  4) Change styles
  5) Add info to slides
*/
