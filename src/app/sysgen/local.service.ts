import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  BASE_URL = "http://localhost:3000/";
  catUrl = this.BASE_URL + 'cats';
  detailUrl = this.BASE_URL + 'cat/';
  loginUrl = this.BASE_URL + 'user/api/login';
  registerUrl = this.BASE_URL + 'user/api/register';
  adminCatUrl = this.BASE_URL + 'admin/cat/all'
  adminGallery = this.BASE_URL + 'admin/gallery/all'
  adminImageUploadUrl = this.BASE_URL + 'admin/image/upload'
  adminPostPaginateUrl = this.BASE_URL + 'admin/product/paginate/'
  adminPostCreateUrl = this.BASE_URL + 'admin/product/create';
  orderUploadUrl = this.BASE_URL + 'user/order';
  hisotryAllUrl = this.BASE_URL + 'user/order/history';
  historyDetailUrl = this.BASE_URL + 'user/order/detail/';

  isAuth = new Subject<boolean>();
  authBool = this.isAuth.asObservable();

  isCartChange = new Subject<boolean>();
  isCartBool = this.isCartChange.asObservable();

  constructor(private http: HttpClient) { }

  changeAuth(val: boolean) {
    this.isAuth.next(val)
  }

  cartChange(val: boolean) {
    this.isCartChange.next(val);
  }

  getAllCats() {
    return this.http.get(this.catUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getCatDetailProduct(id: any) {
    let catProductUrl = this.detailUrl + id;
    return this.http.get(catProductUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  loginUserNow(data: any) {
    return this.http.post(this.loginUrl, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  registerUserNow(data: any) {
    return this.http.post(this.registerUrl, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  getAllAdminCat() {
    return this.http.get(this.adminCatUrl).pipe(
      map((response: any) => response)
    )
  }

  getALlAdminGallery() {
    return this.http.get(this.adminGallery).pipe(
      map((response: any) => response)
    )
  }

  uploadImage(data: any) {
    return this.http.post(this.adminImageUploadUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getPaginatePost(start: any, end: any) {
    const link = this.adminPostPaginateUrl + start + "/" + end;
    return this.http.get(link).pipe(
      map(
        (response: any) => response
      )
    );
  }

  postCreate(data: any) {
    return this.http.post(this.adminPostCreateUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  postOrder(data: any) {
    return this.http.post(this.orderUploadUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getAllHistory() {
    return this.http.get(this.hisotryAllUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getOrderDetailById(id: any) {
    const link = this.historyDetailUrl + id;
    return this.http.get(link).pipe(
      map(
        (response: any) => response
      )
    );
  }



}

