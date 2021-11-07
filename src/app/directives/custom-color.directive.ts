import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomColor]'
})
export class CustomColorDirective {

  constructor(thisElem: ElementRef) {
    thisElem.nativeElement.style.color='purple'
  }

}
