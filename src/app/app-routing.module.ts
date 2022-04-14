import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layouts/home-layout.component';
import { UserLoginLayoutComponent } from './Layouts/user-login-layout.component';
import { SignUpLayoutComponent } from './Layouts/Sign-Up/sign-up-layout.component';
import { CategoriesLayoutComponent } from './Layouts/Categories/categories-layout.component';
import { StoreLayoutComponent } from './Layouts/Store/store-layout.component';
import { AddCategoryComponent } from './Layouts/Categories/add-category/add-category.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
  },
  {
    path: 'user-login',
    component: UserLoginLayoutComponent,
  },
  {
    path: 'user-registration',
    component: SignUpLayoutComponent,
  },
  {
    path: 'categories',
    component: CategoriesLayoutComponent,
  },
  {
    path: 'store',
    component: StoreLayoutComponent,
  },
  {
    path: 'admin',
    component: AddCategoryComponent,
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
