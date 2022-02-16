import { Component } from "@angular/core";
import { CatCardModel } from "../CategoryCard/cat-card.model";
import { mock_catCard_list } from "../CategoryCard/mock_catCard_list";
import { InfoCardModel } from "../info-card/info-card.model";
import { mock_infoCard_list } from "../info-card/mock-info-card-list";

@Component({
    selector: 'gp-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent {
  title = 'gopuff-frank-bonanno';
  catCards: CatCardModel [] = [];
  infoCards: InfoCardModel [] =[];

  constructor() {
    for (var catCard of mock_catCard_list) {
      console.log(catCard);
      this.catCards.push(catCard);  
    }

    for(var infoCard of mock_infoCard_list) {
      console.log(infoCard); 
      this.infoCards.push(infoCard);
    }
  }
}