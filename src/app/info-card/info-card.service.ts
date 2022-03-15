import { Injectable } from '@angular/core';
import { InfoCardModel } from './info-card.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class InfoCardService {
  private dbURL: string = 'https://go-puff-app-fb-default-rtdb.firebaseio.com/';
  private infoCardsEndPoint: string = 'infoCards.json';

  constructor(private db: AngularFireDatabase) {}

  public getInfoCards() {
    // Get list of 'infoCards' from linked db and update whenever there are changes
    return this.db.list<InfoCardModel>('infoCards').valueChanges();
  }

  public getInfoCard(index: number) {}
}
