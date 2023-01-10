import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { CreditsComponent } from '../credits/credits.component';
import { FaqComponent } from '../faq/faq.component';
import { LocationComponent } from '../location/location.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { StartComponent } from '../start/start.component';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  class TranslateServiceMock {
    public addLangs = () => { return true; };
    public setDefaultLang = () => { return true; };
    public use = () => { return true; };
  }

  @Pipe({name: 'translate'})
  class TranslatePipeMock implements PipeTransform {
    transform(value: number): number {
      return value;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreditsComponent,
        FaqComponent,
        HomepageComponent,
        LocationComponent,
        NavigationComponent,
        StartComponent,
        TranslatePipeMock
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
