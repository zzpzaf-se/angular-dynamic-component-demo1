import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Dynamic Component Demo';
  public msg: string = '';

  public dynCompMsg(msg: string) {
    this.msg = msg;
  }

  showDynamicContent(): void {}
}
