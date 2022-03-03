import { Component, Input, OnInit } from '@angular/core';
import { CatCardService } from './cat-card.service';

@Component({
  selector: 'gp-categorycard',
  templateUrl: 'cat-card.component.html',
  styleUrls: ['cat-card.component.css'],
})
export class CategoryCardComponent {
  @Input() img: string;
  @Input() title: string;

  constructor() {
    this.img = '';
    this.title = 'MISSING TITLE';
  }
}
