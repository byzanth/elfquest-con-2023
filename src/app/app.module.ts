import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationComponent } from './location/location.component';
import { FaqComponent } from './faq/faq.component';
import { StartComponent } from './start/start.component';
import { CreditsComponent } from './credits/credits.component';
import { NavigationComponent } from './navigation/navigation.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LocationComponent,
    FaqComponent,
    StartComponent,
    CreditsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent}
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [TranslatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
