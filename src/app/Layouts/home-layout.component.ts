import { Component } from "@angular/core";
import { CatCardModel } from "../CategoryCard/cat-card.model";
import { mock_catCard_list } from "../CategoryCard/mock_catCard_list";

@Component({
    selector: 'gp-home-layout',
    templateUrl: 'home-layout.component.html',
})

export class HomeLayoutComponent {
    title = 'gopuff-frank-bonanno';
  catCards: CatCardModel [] = [];

  constructor() {
    for (var catCard of mock_catCard_list) {
      console.log(catCard);
      this.catCards.push(catCard);  
    }
  }
}