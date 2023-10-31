import { Directive, Type, ViewContainerRef } from '@angular/core';
import { MyDynamicComponent } from './my-dynamic/my-dynamic.component';

@Directive({
  selector: '[adDynamic]'
})
export class AdDynDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

  createMyDynamicComponent() {
    return this.viewContainerRef.createComponent(MyDynamicComponent);
  }

  // createMyDynamicComponent<C>(componentType: Type<C>) {
  //   return this.viewContainerRef.createComponent(componentType);
  // }

}
