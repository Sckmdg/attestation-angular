import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() open = new EventEmitter<any>();

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

  getSlides(): void {
    this.slideService.getSlides()
      .subscribe(slides => this.slides = slides);
  }
}
/*
  TODO

  1) Footer - Add check on footer when we delete slide - total number of slides should change
  4) Change styles
  5) Add info to slides

 */
