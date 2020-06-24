import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/shared/models/oven.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-oven-card",
  templateUrl: "./product-oven-card.component.html",
  styleUrls: ["./product-oven-card.component.scss"],
})
export class ProductOvenCardComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) {
    this.product = {
      ovenProductId: 1,
      pcc: 1,
      product: {
        id: 1,
      },
      newLoteId: 1,
      date: "25/06/2020",
    };
  }

  ngOnInit() {}

  detailProduct(index) {
    this.router.navigateByUrl(`/product/${index}`);
  }
}
