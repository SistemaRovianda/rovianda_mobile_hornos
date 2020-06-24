import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Observable } from "rxjs";
import { Products, NewProduct, DetailProduct } from "../models/oven.interface";
import {
  ProductFormulation,
  ProductOven,
  ProductOvenDetail,
} from "../models/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url;

  constructor(private http: HttpClient) {
    this.url = `${environment.basePath}/oven`;
  }

  getProductsOven(): Observable<ProductOven[]> {
    return this.http.get<ProductOven[]>(`${this.url}/products`);
  }

  getProductsFormulation(): Observable<ProductFormulation[]> {
    return this.http.get<any[]>(`${this.url}/formulation/products`);
  }

  newProduct(payload: NewProduct): Observable<any> {
    return this.http.post<any>(`${this.url}/product`, { payload });
  }

  getDetailProduct(id: number): Observable<ProductOvenDetail> {
    return this.http.get<ProductOvenDetail>(`${this.url}/product/${id}`);
  }
}
