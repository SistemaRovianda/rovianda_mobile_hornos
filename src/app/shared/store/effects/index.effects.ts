import { LogginEffects } from "src/app/features/landing/store/login/login.effects";
import { ListProductsEffects } from "src/app/features/products/store/list-products/list-products.effects";
import { NewProductEffects } from "src/app/features/products/store/new-product/new-product.effects";
import { DetailReviewListEffects } from "src/app/features/products/store/product-review-list/product-review-list.effects";
import { UsersEffects } from "src/app/features/products/store/users/users.effects";
import { RevisionEffects } from "src/app/features/products/store/revision/revision.effects";
import { UsersCheckedEffects } from "src/app/features/products/store/usersChecked/users-checked.effects";
import { ProductsProcessEffects } from 'src/app/features/products/store/products-process/products-process.effects';

export const effects = [
  LogginEffects,
  ListProductsEffects,
  NewProductEffects,
  DetailReviewListEffects,
  UsersEffects,
  RevisionEffects,
  UsersCheckedEffects,
  ProductsProcessEffects
];
