import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_ENDPOINT_PROVIDER } from "../../providers/tokens";
import { UserInterface } from "../models/user.interface";
import Auth = firebase.auth.Auth;
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  url: string;

  auth: Auth;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${this.endpoint}/user`;
    firebase.initializeApp({
      apiKey: "AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o",
      authDomain: "rovianda-88249.firebaseapp.com",
    });

    this.auth = firebase.auth();
  }

  signIn(email: string, password: string): Observable<any> {
    return from(
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) =>
          Promise.all([
            Promise.resolve(userCredentials.user.uid),
            Promise.resolve(userCredentials.user.refreshToken),
          ])
        )
    ).pipe(map(([uid, token]) => ({ uid, token })));
  }

  getUserData(uid: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.url}/${uid}`);
  }

  isAuth(): Observable<any> {
    return from(
      this.storage.get("token").then((token) => {
        console.log("Token: ", token);
        if (token) return Promise.resolve(true);
        return false;
      })
    ).pipe(map((val) => val));
  }

  verifyRole(): Observable<boolean> {
    return from(
      this.storage.get("role").then((role) => {
        console.log("rol: ", role);
        if (role != null && role == "OVEN") return Promise.resolve(true);
        return Promise.resolve(false);
      })
    ).pipe(map((res) => res));
  }

  getUID() {
    return this.auth.currentUser.uid;
  }

  getTokenCurrentUser(): Observable<any> {
    return from(
      this.auth.currentUser
        .getIdToken()
        .then((res) => Promise.all([Promise.resolve(res)]))
        .catch((error) => Promise.all(error))
    ).pipe(map(([currentToken]) => ({ currentToken })));
  }

  signOut(): Observable<any> {
    this.storage.clear().then((res) => {
      console.log("Clear Storage");
    });
    return from(
      this.auth.signOut().then((res) => {
        this.router.navigate(["/login"], { replaceUrl: true });
      })
    );
  }
}
