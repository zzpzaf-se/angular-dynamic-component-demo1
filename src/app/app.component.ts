import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MyDynamicComponent } from './my-dynamic/my-dynamic.component';
import { AdDynDirective } from './ad-dyn.directive';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  public title: string = 'Dynamic Component Demo';


  @ViewChild(AdDynDirective,{static: true}) 
  adDynamic!: AdDynDirective; 
  

  private componentRef!: ComponentRef<any>;


  public msg:string ="";


  ngOnInit(): void {
    console.log(">===>> " + this.title);
    this.adDynamic.viewContainerRef.clear();
  }


  showDynamicComponent(): void {
    this.adDynamic.viewContainerRef.clear();
    // this.componentRef = this.viewRef.createComponent(MyDynamicComponent); 
    this.componentRef = this.adDynamic.createMyDynamicComponent() 

    this.componentRef.instance.subTitle = "My most-liked rose";
    this.componentRef.instance.dynEevent.subscribe((msg: string) => this.msg = msg);
  }


  removeDynamicComponent(): void {
    this.adDynamic.viewContainerRef.clear();
    this.msg = "";
  }

}
