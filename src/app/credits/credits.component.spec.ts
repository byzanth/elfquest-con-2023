import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { CreditsComponent } from './credits.component';

describe('CreditsComponent', () => {
  let component: CreditsComponent;
  let fixture: ComponentFixture<CreditsComponent>;

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
      declarations: [ CreditsComponent, TranslatePipeMock ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
