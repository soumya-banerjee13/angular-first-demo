import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModuleRoutingModule } from './child-module-routing.module';
import { ChildCompComponent } from './child-comp/child-comp.component';


@NgModule({
  declarations: [ChildCompComponent],
  imports: [
    CommonModule,
    ChildModuleRoutingModule
  ]
})
export class ChildModuleModule { }
