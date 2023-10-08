import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adDynamic]'
})
export class AdDynDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
