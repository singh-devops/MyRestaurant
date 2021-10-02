import { Component, Input, OnInit } from '@angular/core';
import { Recipemodel } from 'src/app/recipemodel';

@Component({
  selector: 'app-recipelistitem',
  templateUrl: './recipelistitem.component.html',
  styleUrls: ['./recipelistitem.component.scss']
})
export class RecipelistitemComponent implements OnInit {
  @Input() reciperec:Recipemodel|any;
  constructor() { }

  ngOnInit(): void {
  }

}
