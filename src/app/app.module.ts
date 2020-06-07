import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppProvidersModule } from "./providers/app-providers.module";
import { AuthGuard } from "./shared/guards/auth.guard";
import { IsAuthGuard } from "./shared/guards/is-auth.guard";

import { AngularFireAuthModule } from "@angular/fire/auth";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./shared/store/reducers/index.reducer";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { effects } from "./shared/store/effects/index.effects";
import { MessageDialogModule } from "./features/products/dialogs/message-dialog/message-dialog.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppProvidersModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
    }),
    HttpClientModule,
    MessageDialogModule,
  ],
  providers: [
    AuthGuard,
    IsAuthGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppProvidersModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
