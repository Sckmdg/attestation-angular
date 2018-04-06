import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit, OnChanges{
  @Input('appTemplate') template: string;

  constructor(
    private el: ElementRef) { }

  ngOnInit(): void {
    this.changeTemplate()
  }

  changeTemplate() :void {
    window.scrollTo(0, 0);
    this.el.nativeElement.innerHTML = this.template;
  }

  ngOnChanges(changes: any) {
    if (changes.template.previousValue && changes.template.currentValue !== changes.template.previousValue) {
      this.changeTemplate()
    }
  }
}
