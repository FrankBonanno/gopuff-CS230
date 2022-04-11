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

  public addCategory(category: CatCardModel) {
    this.db.list<CatCardModel>('catCards').push(category);
  }
}
