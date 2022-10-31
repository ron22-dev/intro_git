import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopPageInfoComponent } from './main/components/top-page-info/top-page-info.component';
import { TopPageComponent } from './main/containers/top-page/top-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './main/containers/nav-bar/nav-bar.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon"; 
@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    TopPageInfoComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
