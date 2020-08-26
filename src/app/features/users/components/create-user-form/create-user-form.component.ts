import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import { from, Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { UserRegistered } from "src/app/shared/models/user.interface";
import { Store, select } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { usersSelector, usersOfOvenSelector } from "src/app/features/products/store/users/users.selectors";
import { getUserOfOven } from 'src/app/features/products/store/users/users.actions';
import { userOfOven } from 'src/app/features/products/store/users/users.reducer';

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

  users: UserRegistered[]=[];

  userVerifyJob: string;

  userCheckJob: string;

  @Input("ovenId") ovenId:number;

  usersOfOvenStore:userOfOven=null;
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

    this.store.select(usersSelector).subscribe((users)=>{
      this.users = users;
    });
  }
  
  ngOnInit() {
    this.store.dispatch(getUserOfOven({ovenId:this.ovenId}));
    this.store.pipe(select(usersOfOvenSelector)).subscribe((value)=>{
      if(value!=null && value.jobElaborated!=undefined && value.jobElaborated!=""){
        this.usersOfOvenStore = value;
        
        console.log("Users oven",value);
        console.log("Modificando array default");
        
        this.form.get("nameVerify").setValue(value.nameVerify);
      this.form.get("jobVerify").setValue(value.jobVerify);
      this.form.get("nameCheck").setValue(value.checkName);
      this.form.get("jobCheck").setValue(value.checkJob);
     
      }else{
        this.usersOfOvenStore=null;
      }
      console.log("Oven",this.usersOfOvenStore);
      console.log("USUARIOS",this.users);
    });
  }

  onSubmit() {
    if(this.usersOfOvenStore==null){
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
  }

  selectNameVerify(evt) {
    console.log("seleccino: ", evt.detail.value.job);
    this.userVerifyJob = evt.detail.value.job;
  }

  selectNameCheck(evt){
    console.log("nameCheck: ", evt);
    this.userCheckJob = evt.detail.value.job
  }
}
