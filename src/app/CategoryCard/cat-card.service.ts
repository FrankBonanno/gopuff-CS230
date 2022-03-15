import { Injectable } from '@angular/core';
import { CatCardModel } from './cat-card.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CatCardService {
  constructor(private db: AngularFireDatabase) {}

  public getCatCards() {
    // Get 'catCards' list from db
    return this.db.list<CatCardModel>('catCards').valueChanges(); // valueChanges() updates when db changes
  }

  public getCatCard(index: number) {
    // Get cat cards with a minimum price of 10 and update whenever db updates
    // return this.db
    //   .list('catCards', (ref) => ref.orderByChild('price').startAt(10))
    //   .valueChanges();
  }
}
