import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedTitle = 'We Are Speedy!';
  let expectedDesc = 'The fastest around!';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.title = 'We Are Speedy!';
    component.description = 'The fastest around!';

    fixture.detectChanges();
  });

  // Is component created?
  it('should create', () => {
    expect(component).toBeDefined();
  });

  // Should display card title
  it('should display the info-card title', () => {
    expect(cardEl.textContent).toContain(expectedTitle);
  });

  // Should display card desc
  it('should display the info-card desc', () => {
    expect(cardEl.textContent).toContain(expectedDesc);
  });
});
