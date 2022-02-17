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
import { UserLoginLayoutComponent } from './Layouts/user-login-layout.component';
import { SignUpLayoutComponent } from './Layouts/Sign-Up/sign-up-layout.component';
import { CategoriesLayoutComponent } from './Layouts/Categories/categories-layout.component';
import { StoreLayoutComponent } from './Layouts/Store/store-layout.component';


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
    UserLoginLayoutComponent,
    SignUpLayoutComponent,
    CategoriesLayoutComponent,
    StoreLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
