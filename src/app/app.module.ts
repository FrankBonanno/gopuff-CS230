import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopCarouselComponent } from './Carousels/top-carousel.component';
import { CategoryCardComponent } from './CategoryCard/cat-card.component';

import { BottomNavBarComponent } from './NavBar/bottomnavbar.component';
import { TopNavBarComponent } from './NavBar/topnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CategoryCardComponent,
    TopCarouselComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
