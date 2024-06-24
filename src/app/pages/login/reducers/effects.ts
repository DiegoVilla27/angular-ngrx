import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService, IUser } from "../../../services/auth.service";
import { userFailure, userInit, userSuccess } from "./actions";
import { HttpErrorResponse } from "@angular/common/http";

export const userEffect = createEffect(
  (actions$ = inject(Actions), _authSvc = inject(AuthService)) => {
    return actions$.pipe(
      ofType(userInit),
      exhaustMap(({ token }) =>
        _authSvc.user(token).pipe(
          map((user: IUser) => userSuccess({ user })),
          catchError((error: HttpErrorResponse) =>
            of(userFailure({ error: error.error }))
          )
        )
      )
    );
  },
  { functional: true }
);
