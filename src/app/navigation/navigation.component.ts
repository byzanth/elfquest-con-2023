import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public languageInUse: string | null = null;

  public constructor(private translate: TranslateService) {
    this.languageInUse = translate.currentLang;
  }

  ngOnInit(): void {
    console.log("init navigation");
  }

  public useLanguage(language: string) {
    this.translate.use(language);
    this.languageInUse = language;
  }

}
