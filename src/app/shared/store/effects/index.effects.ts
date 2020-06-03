import { LogginEffects } from "src/app/features/landing/store/login/login.effects";
import { ListProductsEffects } from "src/app/features/products/store/list-products/list-products.effects";
import { NewProductEffects } from "src/app/features/products/store/new-product/new-product.effects";

export const effects = [LogginEffects, ListProductsEffects, NewProductEffects];
