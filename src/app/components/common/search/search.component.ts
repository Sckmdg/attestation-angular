import { Component } from '@angular/core';
import { Slide } from "../../root-slide/slide";
import { SlideService } from "../../../services/slide.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  slides: Array<Slide>;
  searchValue = '';

  constructor(private slideService: SlideService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.slides = this.slideService.searchSlides(term);
  }

  test(): void {
    this.searchValue = '';
  }
}
