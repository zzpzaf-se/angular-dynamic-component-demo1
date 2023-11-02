import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-dynamic2',
  templateUrl: './my-dynamic2.component.html',
  styleUrls: ['./my-dynamic2.component.css']
})
export class MyDynamic2Component {

  @Input() 
  public subTitle!: string;
  @Output() 
  public dynEevent = new EventEmitter<string>();

  public dynMessage: string = "Mouse is inside compnent area!";

}
