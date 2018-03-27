import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Slide } from './slide'
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-slide',
  templateUrl: './root-slide.component.html',
  styleUrls: ['./root-slide.component.css']
})

export class RootSlideComponent implements OnInit {
  @Input() slide: Slide;

  constructor(
    private route: ActivatedRoute,
    private slideService: SlideService,
  ) {}

  ngOnInit(): void {
    this.getSlide();
  }

  getSlide(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.slideService.getSlide(id)
      .subscribe(slide => this.slide = slide);
  }

}
