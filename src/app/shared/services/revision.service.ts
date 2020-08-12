import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Revision } from "../models/oven.interface";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";

@Injectable({
  providedIn: "root",
})
export class RevisionService {
  constructor(
    private _http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  registerRevision(productId: string, revision: Revision): Observable<any> {
    return this._http.post<any>(
      `${this.endpoint}/oven/product/${productId}`,
      revision
    );
  }

  closedRevision(productId: string): Observable<any> {
    return this._http.patch<any>(
      `${this.endpoint}/oven/product/${productId}`,
      {}
    );
  }
}
