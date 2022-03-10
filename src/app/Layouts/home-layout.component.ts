import { Component } from '@angular/core';
import { CatCardModel } from '../CategoryCard/cat-card.model';
import { CatCardService } from '../CategoryCard/cat-card.service';
import { InfoCardModel } from '../info-card/info-card.model';
import { InfoCardService } from '../info-card/info-card.service';

@Component({
  selector: 'gp-home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.css'],
})
export class HomeLayoutComponent {
  title = 'gopuff-frank-bonanno';
  catCards: CatCardModel[] = [];
  infoCards: InfoCardModel[] = [];

  // Services
  constructor(
    private catCardService: CatCardService,
    private infoCardService: InfoCardService
  ) {}

  ngOnInit(): void {
    // Get catCard data and push to list of catCards
    console.log('Fetch Cat Cards >>');
    this.catCardService.getCatCards().subscribe((data) => {
      // console.log(data);
      for (var catCard of data) {
        this.catCards.push(catCard);
      }
    });

    // Fetch a single cat card
    this.catCardService.getCatCard(3).subscribe((data) => {
      // console.log(data);
    });

    // Fetch info cards data
    console.log('Fetch Info Cards >>');
    this.infoCardService.getInfoCards().subscribe((data) => {
      console.log(data);
      for (var infoCard of data) {
        this.infoCards.push(infoCard);
      }
    });
  }
}
