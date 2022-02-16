import { Component, Input } from '@angular/core';

@Component({
  selector: 'gp-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() img: string;
  @Input() title: string;  
  @Input() description: string;

  constructor() {
    this.img = "";
    this.title = "NO TITLE";
    this.description = "MISSING DESC.";
  }

}
