import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit{
  @Input('appTemplate') template: string;

  constructor(
    private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.innerHTML = this.template
  }
}
