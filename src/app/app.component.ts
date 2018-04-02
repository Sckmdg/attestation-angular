import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
/*
  TODO

  1) Footer - Add check on footer when we delete slide - total number of slides should change
  2) SideBar - When delete current slide - should check where we going to - forward/backward and set right id
  3) Change route hack
    ngOnInit() {
    this.hero$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')));
  }
  4) Change styles
  5) Add info to slides

 */
