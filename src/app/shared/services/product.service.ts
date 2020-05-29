import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Observable } from "rxjs";
import { Products } from "../models/oven.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url;

  constructor(private http: HttpClient) {
    this.url = `${environment.basePath}/oven`;
  }

  getProducts(): Observable<any> {
    return this.http.get<Products[]>(`${this.url}/products`);
  }
}
