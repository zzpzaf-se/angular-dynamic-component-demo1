import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-dynamic1-comp',
  templateUrl: './my-dynamic1.component.html',
  styleUrls: ['./my-dynamic1.component.css']
})
export class MyDynamic1Component {
  @Input() 
  public subTitle!: string;
  @Output() 
  public dynEevent = new EventEmitter<string>();

  public dynMessage: string = "Mouse is inside image area!";

  //public subTitle: string = "My favorite flower";
  
}
