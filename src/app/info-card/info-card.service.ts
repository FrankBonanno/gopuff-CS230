import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoCardModel } from './info-card.model';

@Injectable({
  providedIn: 'root',
})
export class InfoCardService {
  private dbURL: string = 'https://go-puff-app-fb-default-rtdb.firebaseio.com/';
  private infoCardsEndPoint: string = 'infoCards.json';

  constructor(private http: HttpClient) {}

  public getInfoCards() {
    return this.http.get<InfoCardModel[]>(this.dbURL + this.infoCardsEndPoint);
  }

  public getInfoCard(index: number) {
    return this.http.get<InfoCardModel>(
      this.dbURL + 'infoCards/' + index + '.json'
    );
  }
}
