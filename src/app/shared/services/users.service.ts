import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { UserRegistered, UsersCheckers } from "../models/user.interface";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getUsers(role: string): Observable<any> {
    console.log("rol service: ", role);
    return this.http.get<UserRegistered[]>(`${this.endpoint}/user/rol/${role}`);
  }

  addUser(processId: string, users: UsersCheckers): Observable<string> {
    return this.http.post<string>(
      `${this.endpoint}/oven/users/${processId}`,
      users
    );
  }

  getUsersChecked(processId: string): Observable<UsersCheckers> {
    return this.http.get<UsersCheckers>(
      `${this.endpoint}/oven/users/${processId}`
    );
  }
}
