import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Slide } from '../../root-slide/slide';
import { SlideService } from '../../../services/slide.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  slides: Observable<Slide[]>;
  focus: boolean;
  private searchTerms = new Subject<string>();

  constructor(private slideService: SlideService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.focus = true;
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.slides = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.slideService.searchSlides(term)),
    );
  }
}
