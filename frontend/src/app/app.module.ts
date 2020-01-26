import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import { AppComponent } from './app.component';
import { Frame1Component } from './frames/frame1/frame1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavsComponent } from './navs/navs.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Frame1Component,
    NavsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
