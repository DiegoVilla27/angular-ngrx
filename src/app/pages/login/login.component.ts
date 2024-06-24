import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { AuthService, IUser } from "../../services/auth.service";
import { IStore } from "../../store/reducers";
import { JsonPipe, NgIf, NgStyle } from "@angular/common";

@Component({
  selector: "ngrx-login",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgStyle, JsonPipe],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss"
})
export class LoginComponent {
  form!: FormGroup;
  loading: boolean = false;
  user: IUser | null = null;

  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthService,
    private _store: Store<IStore>
  ) {
    this.buildForm();
    this.watchStore();
  }

  buildForm(): void {
    this.form = this._fb.group({
      email: [""],
      password: [""]
    });
  }

  watchStore(): void {
    this._store.select("user").subscribe((user) => {
      this.user = user.user;
      this.loading = user.loading;
    });
  }

  submit(): void {
    this._authSvc.login(this.form.value).subscribe();
  }
}
