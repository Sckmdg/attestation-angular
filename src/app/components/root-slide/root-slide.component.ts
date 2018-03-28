import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Slide } from './slide'
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-slide',
  templateUrl: './root-slide.component.html',
  styleUrls: ['./root-slide.component.css']
})

export class RootSlideComponent implements OnInit, DoCheck {
  currentSlideId: number;
  @Input() slide: Slide;

  constructor(
    private route: ActivatedRoute,
    private slideService: SlideService,
  ) {}

  ngOnInit(): void {
    this.initCurrentSlide();
    this.getSlide();
  }

  ngDoCheck(): void {
    const id = this.slideService.getParamFromRoute(this.route, 'id');

    if (id !== this.currentSlideId) {
      this.currentSlideId = id;
      this.getSlide();
    }
  };

  getSlide(): void {
    this.slideService.getSlide(this.currentSlideId)
      .subscribe(slide => this.slide = slide);
  }

  initCurrentSlide(): void {
    this.currentSlideId = this.slideService.getParamFromRoute(this.route, 'id');
  }

}
