import { Component, OnInit } from '@angular/core';
import { CatCardModel } from 'src/app/CategoryCard/cat-card.model';
import { CatCardService } from 'src/app/CategoryCard/cat-card.service';

@Component({
  selector: 'gp-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  constructor(private ps: CatCardService) {}

  ngOnInit(): void {}

  addCategory(category: CatCardModel) {
    console.log(category);
    this.ps.addCategory(category);
  }
}
