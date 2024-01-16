import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { GalleryCreateComponent } from './admin/gallery-create/gallery-create.component';
import { PostAllComponent } from './admin/post-all/post-all.component';
import { PostCreateComponent } from './admin/post-create/post-create.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LocalService } from './sysgen/local.service';
import { AuthInterceptor } from './sysgen/auth.interceptor';
import { LoadingComponent } from './loading/loading.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { HistoryComponent } from './history/history.component';
import { HistoryHomeComponent } from './history/history-home/history-home.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminGalleryComponent,
    AdminHomeComponent,
    GalleryCreateComponent,
    PostAllComponent,
    PostCreateComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    LoadingComponent,
    CartDetailComponent,
    HistoryComponent,
    HistoryHomeComponent,
    HistoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    provideClientHydration(),
    LocalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
