import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
