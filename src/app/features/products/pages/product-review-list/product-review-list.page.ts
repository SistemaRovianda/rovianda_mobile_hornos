import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Revision } from "src/app/shared/models/oven.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromDetailActions from "../../store/product-review-list/product-review-list.actions";
import * as fromDetailSelector from "../../store/product-review-list/product-review-list.selector";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { UsersCheckers } from "src/app/shared/models/user.interface";
import { SELECT_USERS_CHECKED } from "../../store/usersChecked/users-checked.selectors";

@Component({
  selector: "app-product-review-list",
  templateUrl: "./product-review-list.page.html",
  styleUrls: ["./product-review-list.page.scss"],
})
export class ProductReviewListPageComponent implements OnInit {
  products$: Observable<Revision[]>;

  users$: Observable<UsersCheckers>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController
  ) {
    this.store.dispatch(fromDetailActions.fetchAllDetail({ id: this.id }));
  }

  ngOnInit() {
    this.store.select(fromDetailSelector.loadingDetail).subscribe((loading) => {
      if (loading == false) {
        this.products$ = this.store.select(
          fromDetailSelector.fetchDetailRevision
        );
      }
    });

    this.users$ = this.store.select(SELECT_USERS_CHECKED);
    this.users$.subscribe((res) => {
      console.log("users checked: ", res);
    });
  }

  get id(): number {
    return parseInt(this.route.snapshot.paramMap.get("id"));
  }

  endup() {
    // this.router.navigate(["/product/list"]);
    this.store.dispatch(
      fromDetailActions.closeOvenProduct({ productId: this.id.toString() })
    );
  }

  addUsers() {
    this.router.navigate([
      `/user/${this.route.snapshot.paramMap.get("id")}/create-user`,
    ]);
  }

  onBackPage(evt) {
    this.router.navigate([`product/${this.route.snapshot.paramMap.get("id")}`]);
  }
}
