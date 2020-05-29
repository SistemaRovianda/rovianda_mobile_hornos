import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { StoreValidator } from "src/app/shared/validators/store.validator";
import {
  SELECT_IS_LOADING,
  SELECT_LOGIN_ERROR,
} from "../../store/login/login.selector";
import {
  ERROR_EMAIL_NOT_FOUND,
  ERROR_PASSWORD_INVALID,
} from "src/app/shared/const";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  loading: boolean;

  @Output("onSubmit") submit = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private _store: Store<AppStateInterface>
  ) {
    this.loading = false;
    this.form = fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]],
      },
      {
        asyncValidators: [
          StoreValidator.hasStoreError(
            this._store.select(SELECT_LOGIN_ERROR),
            "loginError"
          ),
        ],
      }
    );
  }

  ngOnInit() {
    this._store
      .select(SELECT_IS_LOADING)
      .subscribe((res) => (this.loading = res));
  }

  translateError(errorMessage: string): string {
    if (errorMessage == ERROR_EMAIL_NOT_FOUND) {
      return "Correo no registrado.";
    }
    if (errorMessage == ERROR_PASSWORD_INVALID) {
      return "Contraseña invalida.";
    }
    return "Varios intentos fallidos, consulte con el administrador o intente mas tarde";
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  onSubmit(): void {
    this.submit.emit(this.form.value);
  }

  shouldDisable(): boolean {
    return this.form.invalid || this.form.pending;
  }
}
