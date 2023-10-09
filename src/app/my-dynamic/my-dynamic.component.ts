import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-dynamic-comp',
  templateUrl: './my-dynamic.component.html',
  styleUrls: ['./my-dynamic.component.css']
})
export class MyDynamicComponent {
  @Input() public subTitle!: string;
  @Output() dynEevent = new EventEmitter<string>();

  public dynMessage: string = "Mouse is inside image area!";

  //public subTitle: string = "My favorite flower";
  
}
