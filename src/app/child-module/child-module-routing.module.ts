import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';


const routes: Routes = [
  {
    path: '',
    component: ChildCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildModuleRoutingModule { }
