import { Injectable } from '@angular/core';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';
import { MyDynamic2Component } from './my-dynamic2/my-dynamic2.component';
import { Type } from '@angular/core';


export type MyDyComp = Type<MyDynamic1Component> | Type<MyDynamic2Component>;



@Injectable({
  providedIn: 'root'
})
export class DyncompService {

  constructor() { }

  getDynamicComponent(compToken: string) {
    let component: MyDyComp = MyDynamic1Component ;
    if (compToken == 'dyn1') {     
      component = MyDynamic1Component;
    } else if (compToken == 'dyn2') {     
      component = MyDynamic2Component;
    }
    return component;
  }
}
