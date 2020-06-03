import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NewProductPageComponent } from "./new-product.page";

describe("NewProductComponent", () => {
  let component: NewProductPageComponent;
  let fixture: ComponentFixture<NewProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NewProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
