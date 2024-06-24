import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import { effects } from "./app/store/effects";
import { store } from "./app/store/reducers";
import { environment } from "./environments/environment";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot(store),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: !environment.production
      }),
      EffectsModule.forRoot(effects)
    ),
    ...appConfig.providers
  ]
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
});
