import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  class TranslateServiceMock {
    public addLangs = () => { return true; };
    public setDefaultLang = () => { return true; };
    public use = () => { return true; };
  }

  class TranslatePipeMock {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: TranslatePipe, useClass: TranslatePipeMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
