import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MyDynamicComponent } from './my-dynamic/my-dynamic.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public title: string = 'Dynamic Component Demo';

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<MyDynamicComponent>;

  ngOnInit(): void {
    console.log(">===>> " + this.title);
  }


  showDynamicComponent(): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(MyDynamicComponent); 
  }

  removeDynamicComponent(): void {
    this.viewRef.clear();
  }


}
