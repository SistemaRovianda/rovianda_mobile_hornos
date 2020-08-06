import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import { from, Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { UserRegistered } from "src/app/shared/models/user.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { usersSelector } from "src/app/features/products/store/users/users.selectors";

@Component({
  selector: "create-user-form",
  templateUrl: "./create-user-form.component.html",
  styleUrls: ["./create-user-form.component.scss"],
})
export class CreateUserFormComponent implements OnInit {
  @Output("onSubmit") submit = new EventEmitter();

  form: FormGroup;

  nameElaborated: Observable<string>;

  job: Observable<string>;

  users: Observable<UserRegistered[]>;

  userVerifyJob: string;

  userCheckJob: string;

  constructor(
    private fb: FormBuilder,
    private storage: Storage,
    private store: Store<AppStateInterface>
  ) {
    this.form = fb.group({
      nameElaborated: ["", [Validators.required, whitespaceValidator]],
      jobElaborated: ["", [Validators.required]],
      nameVerify: ["", [Validators.required]],
      jobVerify: ["", [Validators.required, whitespaceValidator]],
      nameCheck: ["", [Validators.required]],
      jobCheck: ["", Validators.required]
    });
    this.nameElaborated = from(
      this.storage.get("currentUser").then((res) => { 
        this.form.get('nameElaborated').setValue(res);
        return Promise.resolve(res)})
      
    );

    // this.storage.get("uid").then((uid) => {
      // this.form.get("nameElaborated").setValue(uid);
    // });

    this.job = from(
      this.storage.get("job").then((res) => Promise.resolve(res))
    );

    this.users = this.store.select(usersSelector);
  }

  ngOnInit() {}

  onSubmit() {
    const {
      nameElaborated,
      jobElaborated,
      nameVerify,
      jobVerify,
      nameCheck,
      jobCheck
    } = this.form.value;
    const user = {
      nameElaborated: nameElaborated.trim(),
      jobElaborated: jobElaborated.trim(),
      nameVerify: nameVerify.fullName,
      jobVerify: jobVerify.trim(),
      nameCheck: nameCheck.fullName,
      jobCheck: jobCheck.trim()
    };
    console.log("form userS:", user);

    this.submit.emit(user);
  }

  selectNameVerify(evt) {
    console.log("seleccino: ", evt.detail.value.job);
    this.userVerifyJob = evt.detail.value.job;
  }

  selectNameCheck(evt){
    this.userCheckJob = evt.detail.value.job
  }
}
