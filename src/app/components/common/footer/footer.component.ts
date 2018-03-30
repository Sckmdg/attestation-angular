import { Component, OnInit, DoCheck } from '@angular/core';
import {SlideService} from "../../../services/slide.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DoCheck {
  currentSlideId = null;
  slides: any;

  constructor(
    private slideService: SlideService,
    private location: Location) { }

  ngOnInit(): void {
    this.currentSlideId = this.slideService.routerHack();
    this.slideService.getSlides().subscribe(slides => this.slides = slides);
  }

  ngDoCheck(): void {
    const id = this.slideService.routerHack();;

    if (id !== this.currentSlideId) {
      this.currentSlideId = id;
    }
  };

  goBack(): void {
    this.location.back();
  }

}
