import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipemodel } from 'src/app/recipemodel';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  allreceipes:Recipemodel[] = [
  new Recipemodel("Chicken Biryani","Yummy yummy tasty",1,200,"./assets/chicken.jpg",.2),
  new Recipemodel("Mutton Biryani","Spicy yummy tasty",2,300,"./assets/mutton.jpg"),
  new Recipemodel("Veg Biryani","Good yummy tasty",3,400,"./assets/veg.jpg",.3),
  new Recipemodel("Chicken Fry","Very nice yummy tasty",4,500,"./assets/chicken.jpg",.1),
  new Recipemodel("Chicken curry","Yummy yummy tasty",5,440,"./assets/mutton.jpg"),
  new Recipemodel("Chicken Tanduri","Spicy yummy tasty",6,250,"./assets/veg.jpg"),
  new Recipemodel("Chicken Fried Rice","Good yummy tasty",7,80,"./assets/chicken.jpg",.5),
  new Recipemodel("Chicken Biryani","Yummy yummy tasty",1,200,"./assets/chicken.jpg",.2),
  new Recipemodel("Mutton Biryani","Spicy yummy tasty",2,300,"./assets/mutton.jpg"),
  new Recipemodel("Veg Biryani","Good yummy tasty",3,400,"./assets/veg.jpg",.3),
  new Recipemodel("Chicken Fry","Very nice yummy tasty",4,500,"./assets/chicken.jpg",.1),
  new Recipemodel("Chicken curry","Yummy yummy tasty",5,440,"./assets/mutton.jpg"),
  new Recipemodel("Chicken Tanduri","Spicy yummy tasty",6,250,"./assets/veg.jpg"),
  new Recipemodel("Chicken Fried Rice","Good yummy tasty",7,80,"./assets/chicken.jpg",.5),
  new Recipemodel("Chicken Biryani","Yummy yummy tasty",1,200,"./assets/chicken.jpg",.2),
  new Recipemodel("Mutton Biryani","Spicy yummy tasty",2,300,"./assets/mutton.jpg"),
  new Recipemodel("Veg Biryani","Good yummy tasty",3,400,"./assets/veg.jpg",.3),
  new Recipemodel("Chicken Fry","Very nice yummy tasty",4,500,"./assets/chicken.jpg",.1),
  new Recipemodel("Chicken curry","Yummy yummy tasty",5,440,"./assets/mutton.jpg"),
  new Recipemodel("Chicken Tanduri","Spicy yummy tasty",6,250,"./assets/veg.jpg"),
  new Recipemodel("Chicken Fried Rice","Good yummy tasty",7,80,"./assets/chicken.jpg",.5),
  new Recipemodel("Chicken Biryani","Yummy yummy tasty",1,200,"./assets/chicken.jpg",.2),
  new Recipemodel("Mutton Biryani","Spicy yummy tasty",2,300,"./assets/mutton.jpg"),
  new Recipemodel("Veg Biryani","Good yummy tasty",3,400,"./assets/veg.jpg",.3),
  new Recipemodel("Chicken Fry","Very nice yummy tasty",4,500,"./assets/chicken.jpg",.1),
  new Recipemodel("Chicken curry","Yummy yummy tasty",5,440,"./assets/mutton.jpg"),
  new Recipemodel("Chicken Tanduri","Spicy yummy tasty",6,250,"./assets/veg.jpg"),
  new Recipemodel("Chicken Fried Rice","Good yummy tasty",7,80,"./assets/chicken.jpg",.5),
  new Recipemodel("Chicken Biryani","Yummy yummy tasty",1,200,"./assets/chicken.jpg",.2),
  new Recipemodel("Mutton Biryani","Spicy yummy tasty",2,300,"./assets/mutton.jpg"),
  new Recipemodel("Veg Biryani","Good yummy tasty",3,400,"./assets/veg.jpg",.3),
  new Recipemodel("Chicken Fry","Very nice yummy tasty",4,500,"./assets/chicken.jpg",.1),
  new Recipemodel("Chicken curry","Yummy yummy tasty",5,440,"./assets/mutton.jpg"),
  new Recipemodel("Chicken Tanduri","Spicy yummy tasty",6,250,"./assets/veg.jpg"),
  new Recipemodel("Chicken Fried Rice","Good yummy tasty",7,80,"./assets/chicken.jpg",.5),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  @Output() selectedrec = new  EventEmitter();

  sendrecipe(rec:any){
    this.selectedrec.emit(rec);
  }
}
