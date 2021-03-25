import {
    NgModule
  } from '@angular/core';
  
  import {
    CommonModule
  } from '@angular/common';
  
  import {
    SkyGridModule
  } from '@skyux/grids';
  
//import { DemoComponent } from './demo.component';
  
  @NgModule({
    imports: [
      CommonModule,
      SkyGridModule
    ]
  })
  export class DemoModule { }