import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elfquest-con-2023';
  private translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
}
}
