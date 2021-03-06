import { Component, OnInit } from '@angular/core';
import { Slide } from './components/root-slide/slide';
import { SlideService } from './services/slide.service';
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
    this.getSlides();

    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
       this.currentSlideId = Number(event.state.root.firstChild.params.id);
      }
    });
  }

  getSlides(): void {
    this.slideService.getSlides()
      .subscribe(slides => this.slides = slides);
  }

  deleteSlide(slide: Slide): void {
    this.slides = this.slides.filter(h => h !== slide);
    this.slideService.deleteSlide(slide).subscribe();

    if (slide.id === this.currentSlideId) {
      this.router.navigate([`/slide/${this.slides[0].id}`]);
    }
  }

  onAddSlide(): void {
    const newId = this.slides[this.slides.length - 1].id + 1;
    const defaultSlide = {
      id: newId,
      title: `Slide${newId}`,
      template: `<p>Slide${newId}</p>`
    };

    this.slideService.addSlide(defaultSlide as Slide)
      .subscribe(slide => {
        this.slides.push(slide);
      });
  }

  onEditSlide(slide: Slide): void {
    this.slideService.updateSlide(slide);
    document.getElementsByClassName('content-slide')[0].innerHTML = slide.template;
  }
}
