import { Component } from '@angular/core';

@Component({
  selector: 'my-dynamic-comp',
  templateUrl: './my-dynamic.component.html',
  styleUrls: ['./my-dynamic.component.css']
})
export class MyDynamicComponent {
  public subTitle: string = "My favorite flower";
}
