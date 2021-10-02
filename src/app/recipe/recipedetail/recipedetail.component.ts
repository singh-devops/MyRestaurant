import { Component, Input, OnInit } from '@angular/core';
import { Recipemodel } from 'src/app/recipemodel';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {
  @Input() reciverec:Recipemodel|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
