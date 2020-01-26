import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Frame1Component } from './frames/frame1/frame1.component';

const routes: Routes = [
  { path: 'frame1', component: Frame1Component }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
