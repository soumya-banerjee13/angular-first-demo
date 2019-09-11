import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CoursesComponent } from './courses/courses.component';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'firstRouting', component: CoursesComponent},
    {path: 'showPipes', component: PipeComponent},
    {path: 'showPipes/:id', component: PipeComponent},
    {path: 'reactiveForm', component: ReactiveFormComponent},
    {path: 'encapsulation', component: EncapsulationComponent},

    {
      path: 'childModule',
      loadChildren: () => import('./child-module/child-module.module').then(mod => mod.ChildModuleModule)
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
