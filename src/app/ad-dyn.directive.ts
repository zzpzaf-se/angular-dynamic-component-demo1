import { ComponentRef, Directive, Type, ViewContainerRef } from '@angular/core';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';
import { DyncompService } from './dyncomp.service';

@Directive({
  selector: '[adDynamic]'
})
export class AdDynDirective {

  constructor(public viewContainerRef: ViewContainerRef, private factService: DyncompService) { }

  private componentRef!: ComponentRef<any>;
  //private msg:string ="";

  createMyDynamicComponent(compToken:string) {
    // return this.viewContainerRef.createComponent(MyDynamic1Component);
    this.componentRef = this.viewContainerRef.createComponent(this.factService.getDynamicComponent(compToken) );
    if (compToken == 'dyn1') this.componentRef.instance.subTitle = "My most-liked rose";
    if (compToken == 'dyn2') this.componentRef.instance.subTitle = "This is a 2nd component";
    
    //this.componentRef.instance.dynEevent.subscribe((msg: string) => this.msg = msg);

    return this.componentRef;
  }

  // createMyDynamicComponent<C>(componentType: Type<C>) {
  //   return this.viewContainerRef.createComponent(componentType);
  // }

}
