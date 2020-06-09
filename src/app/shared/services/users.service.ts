import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "firebase";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getUsers(processId: string): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/oven/users/${processId}`);
  }

  addUser(processId: string, users: User): Observable<string> {
    return this.http.post<string>(
      `${this.endpoint}/oven/users/${processId}`,
      users
    );
  }
}
