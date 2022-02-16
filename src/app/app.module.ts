import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopCarouselComponent } from './Carousels/top-carousel.component';
import { CategoryCardComponent } from './CategoryCard/cat-card.component';

import { BottomNavBarComponent } from './NavBar/bottomnavbar.component';
import { TopNavBarComponent } from './NavBar/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './Layouts/home-layout.component';
import { LeftVerticalCarouselComponent } from './Carousels/left-vertical-carousel/left-vertical-carousel.component';
import { RightVerticalCarouselComponent } from './Carousels/right-vertical-carousel/right-vertical-carousel.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { InfoCardComponent } from './info-card/info-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CategoryCardComponent,
    TopCarouselComponent,
    HomeLayoutComponent,
    LeftVerticalCarouselComponent,
    RightVerticalCarouselComponent,
    SearchBarComponent,
    InfoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
