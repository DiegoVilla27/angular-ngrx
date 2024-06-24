import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { delay, Observable, tap } from "rxjs";
import { userInit } from "../pages/login/reducers/actions";
import { IStore } from "../store/reducers";

export interface ILogin {
  token: string;
  success: boolean;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _store: Store<IStore>
  ) {}

  login(form: Record<string, string>): Observable<ILogin> {
    return this._http
      .get<ILogin>("assets/login.json", { params: { ...form } })
      .pipe(
        tap(({ token, success }: ILogin) =>
          this._store.dispatch(userInit({ token, success }))
        )
      );
  }

  user(token: string): Observable<IUser> {
    return this._http
      .get<IUser>("https://jsonplaceholder.typicode.com/users/1", {
        params: { token }
      })
      .pipe(delay(3000));
  }
}
