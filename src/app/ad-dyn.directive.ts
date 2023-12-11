import { ComponentRef, Directive, EventEmitter, Input, Output, Type, ViewContainerRef } from '@angular/core';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';
import { DyncompService } from './dyncomp.service';

@Directive({
  selector: '[adDynamic]'
})
export class AdDynDirective {

  constructor(public viewContainerRef: ViewContainerRef, private factService: DyncompService) { }
  @Input() 
  inVal: string = "";
  @Output() 
  inAreaMsg: EventEmitter<string> = new EventEmitter<string>();


  private componentRef!: ComponentRef<any>;
  //private msg:string ="";

  // createMyDynamicComponent(compToken:string) {
  //   // return this.viewContainerRef.createComponent(MyDynamic1Component);
  //   this.componentRef = this.viewContainerRef.createComponent(this.factService.getDynamicComponent(compToken) );
  //   if (compToken == 'dyn1') this.componentRef.instance.subTitle = "My most-liked rose";
  //   if (compToken == 'dyn2') this.componentRef.instance.subTitle = "This is a 2nd component";
    
  //   //this.componentRef.instance.dynEevent.subscribe((msg: string) => this.msg = msg);
   
  //   return this.componentRef;
  // }

  public ngOnChanges() : void {
    console.log("===>> " + this.inVal);  
    if (this.inVal != 'dyn1' && this.inVal != 'dyn2') return;
    this.viewContainerRef.clear();
    this.componentRef = this.viewContainerRef.createComponent(this.factService.getDynamicComponent(this.inVal) );
    if (this.inVal == 'dyn1') this.componentRef.instance.subTitle = "My most-liked rose";
    if (this.inVal == 'dyn2') this.componentRef.instance.subTitle = "This is a 2nd component";
    //this.componentRef.instance.dynEevent.subscribe((msg: string) => console.log("===>> " + msg));
    this.componentRef.instance.dynEevent.subscribe((msg: string) => this.inAreaMsg.emit(msg));
  }

}