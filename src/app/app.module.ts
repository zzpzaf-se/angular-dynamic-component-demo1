import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDynamicComponent } from './my-dynamic/my-dynamic.component';
import { AdDynDirective } from './ad-dyn.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDynamicComponent,
    AdDynDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
