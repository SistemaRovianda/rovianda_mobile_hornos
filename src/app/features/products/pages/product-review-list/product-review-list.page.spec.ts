import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ProductReviewListPageComponent } from "./product-review-list.page";

describe("ProductReviewListComponent", () => {
  let component: ProductReviewListPageComponent;
  let fixture: ComponentFixture<ProductReviewListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductReviewListPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductReviewListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
