import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatCardModel } from './cat-card.model';

@Injectable({
  providedIn: 'root',
})
export class CatCardService {
  private dbURL: string = 'https://go-puff-app-fb-default-rtdb.firebaseio.com/';
  private catCardsEndPoint: string = 'catCards.json';

  constructor(private http: HttpClient) {}

  public getCatCards() {
    return this.http.get<CatCardModel[]>(this.dbURL + this.catCardsEndPoint);
  }

  public getCatCard(index: number) {
    return this.http.get<CatCardModel>(
      this.dbURL + 'catCards/' + index + '.json'
    );
  }
}
