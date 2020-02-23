import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Frame1Component } from './frames/frame1/frame1.component';
import { Frame2Component } from './frames/frame2/frame2.component';


const routes: Routes = [
  { path: 'frame1', component: Frame1Component},
  { path: 'frame2', component: Frame2Component}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
