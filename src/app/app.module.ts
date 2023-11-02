import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';
import { AdDynDirective } from './ad-dyn.directive';
import { MyDynamic2Component } from './my-dynamic2/my-dynamic2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDynamic1Component,
    AdDynDirective,
    MyDynamic2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
