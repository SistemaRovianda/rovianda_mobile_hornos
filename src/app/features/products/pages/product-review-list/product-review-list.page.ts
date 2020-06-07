import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Revision } from "src/app/shared/models/oven.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromDetailActions from "../../store/product-review-list/product-review-list.actions";
import * as fromDetailSelector from "../../store/product-review-list/product-review-list.selector";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-review-list",
  templateUrl: "./product-review-list.page.html",
  styleUrls: ["./product-review-list.page.scss"],
})
export class ProductReviewListPageComponent implements OnInit {
  products$: Observable<Revision[]> = this.store.select(
    fromDetailSelector.fetchDetailRevision
  );

  product = [
    {
      hour: "string",
      humidity: "string",
      interTemp: "string",
      observations: "string",
      ovenTemp: "string",
    },
  ];
  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(fromDetailActions.fetchAllDetail({ id: this.id }));
  }

  get id(): number {
    return parseInt(this.route.snapshot.paramMap.get("id"));
  }
}
