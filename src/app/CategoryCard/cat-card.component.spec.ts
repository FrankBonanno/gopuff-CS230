import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CategoryCardComponent } from './cat-card.component';

describe('CategoryCardComponent', () => {
  let component: CategoryCardComponent;
  let fixture: ComponentFixture<CategoryCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedTitle = 'Food';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardComponent);
    component = fixture.componentInstance;
    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.title = 'Food';

    fixture.detectChanges();
  });

  // Is component created?
  it('should create', () => {
    expect(component).toBeDefined();
  });

  // Should display card title
  it('should display the cat-card title', () => {
    expect(cardEl.textContent).toContain(expectedTitle);
  });
});
