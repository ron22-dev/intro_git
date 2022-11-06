import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopPageInfoComponent } from './main/components/top-page-info/top-page-info.component';
import { TopPageComponent } from './main/containers/top-page/top-page.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FujiPageComponent } from './main/containers/fuji-page/fuji-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NavBarInfoComponent } from './nav-bar/components/nav-bar-info/nav-bar-info.component';
import { NavBarComponent } from './nav-bar/containers/nav-bar/nav-bar.component';
import { SubNavBarComponent } from './nav-bar/components/sub-nav-bar/sub-nav-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: TopPageComponent},
  {path: 'main/fuji', component: FujiPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    TopPageInfoComponent,
    NavBarComponent,
    NavBarInfoComponent,
    FujiPageComponent,
    NavBarInfoComponent,
    SubNavBarComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
