import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit, OnChanges {
  @Input('appTemplate') appTemplate: string;

  constructor(
    private el: ElementRef) { }

  ngOnInit(): void {
    this.changeTemplate();
  }

  changeTemplate(): void {
    window.scrollTo(0, 0);
    this.el.nativeElement.innerHTML = this.appTemplate;
  }

  ngOnChanges(changes: any) {
    if (changes.appTemplate.previousValue && changes.appTemplate.currentValue !== changes.appTemplate.previousValue) {
      this.changeTemplate();
    }
  }
}
