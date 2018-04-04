import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Slide } from '../components/root-slide/slide'

@Injectable()
export class SlideService {
  slides = [
    {
      id: 1,
      title: 'Test1',
      template: 'test1'
    },
    {
      id: 2,
      title: 'Test2',
      template: 'test2'
    },
    {
      id: 3,
      title: 'Test3',
      template: 'test3'
    },
    {
      id: 4,
      title: 'Test4',
      template: 'test4'
    },
    {
      id: 5,
      title: 'Test5',
      template: 'test5'
    },
    {
      id: 6,
      title: 'Test6',
      template: 'test6'
    },
    {
      id: 7,
      title: 'Test7',
      template: 'test7'
    },
    {
      id: 8,
      title: 'Test8',
      template: 'test8'
    },
    {
      id: 9,
      title: 'Test9',
      template: 'test9'
    },
    {
      id: 10,
      title: 'Test10',
      template: 'test10'
    },
    {
      id: 11,
      title: 'Test11',
      template: 'test11'
    }
  ];

  constructor() { }

  /** Getting param from route */
  public getParamFromRoute (route: any, param: string): number {
    return param === 'id' ? +route.snapshot.paramMap.get(param) : route.snapshot.paramMap.get(param)
  }

  /** GET slides from the server */
  getSlides (): Array<Slide> {
    return this.slides
  }

  //////// Save methods //////////

  /** POST: add a new slide to the server */
  addSlide (slide: Slide): Array<Slide> {
    this.slides.push(slide);
    return this.slides
  }

  // TODO Check this method
  /** DELETE: delete the slide from the server */
  deleteSlide (slide: Slide | number): Array<Slide> {
    this.slides.filter(h => h !== slide);
    return this.slides;
  }

  /** PUT: update the slide on the server */
  updateSlide (slide: Slide): Array<Slide> {
    const id = typeof slide === 'number' ? slide : slide.id;
    this.slides[id - 1] = slide;

    return this.slides
  }

  /* GET slides whose name contains search term */
  searchSlides(term: string): Array<Slide> {
    const searchSlides = [];
    this.slides.map(slide => {
      if (slide.title.toLowerCase().includes(term.toLowerCase())) {
        searchSlides.push(slide)
      }
    });

    return searchSlides
  }

  /** GET slide by id. Return `undefined` when id not found */
  getSlide(id: number): Slide {
    if (this.slides) return this.slides[id - 1]
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // throw 'test';

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a SlideService */
  private log(message: string) {
    console.log('SlideService: ' + message);
  }
}
