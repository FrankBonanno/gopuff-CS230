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
import { UserTopNavBarComponent } from './user-top-nav-bar/user-top-nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SignUpEmailBoxComponent } from './sign-up-email-box/sign-up-email-box.component';
import { SignUpBottomNavComponent } from './sign-up-bottom-nav/sign-up-bottom-nav.component';
import { SignInMobileNumberComponent } from './sign-in-mobile-number/sign-in-mobile-number.component';
import { HeaderAddressSearchComponent } from './header-address-search/header-address-search.component';
import { CategoriesTopNavBarComponent } from './NavBar/CategoriesPage/categoriesTopNavBar.component';
import { CategoriesSecondTopNavBar } from './NavBar/CategoriesPage/categoriesSecondTopNavBar.component';
import { CategoriesBottomNavComponent } from './NavBar/CategoriesPage/categories-bottom-nav/categories-bottom-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DevInfoComponent } from './dev-info/dev-info.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddCategoryComponent } from './Layouts/Categories/add-category/add-category.component';
import { FormsModule } from '@angular/forms';

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
    StoreLayoutComponent,
    UserTopNavBarComponent,
    SignUpEmailBoxComponent,
    SignUpBottomNavComponent,
    SignInMobileNumberComponent,
    HeaderAddressSearchComponent,
    CategoriesTopNavBarComponent,
    CategoriesSecondTopNavBar,
    CategoriesBottomNavComponent,
    DevInfoComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
