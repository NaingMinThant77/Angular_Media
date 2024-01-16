import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { GalleryCreateComponent } from './admin/gallery-create/gallery-create.component';
import { PostCreateComponent } from './admin/post-create/post-create.component';
import { PostAllComponent } from './admin/post-all/post-all.component';
import { LoadingComponent } from './loading/loading.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { HistoryComponent } from './history/history.component';
import { HistoryHomeComponent } from './history/history-home/history-home.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'cart/detail', component: CartDetailComponent },
  { path: 'detail/:id', component: DetailComponent },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: AdminHomeComponent },
      { path: 'gallery', component: AdminGalleryComponent },
      { path: 'gallery/create', component: GalleryCreateComponent },
      { path: 'post/create', component: PostCreateComponent },
      { path: 'post/all', component: PostAllComponent },
    ]
  },
  {
    path: 'history', component: HistoryComponent, children: [
      {path: '', component: HistoryHomeComponent},
      {path: 'detail/:id', component: HistoryDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
