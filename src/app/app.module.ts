import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { MainComponent } from './main/main.component';
import { RecipelistitemComponent } from './recipe/recipelist/recipelistitem/recipelistitem.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipeComponent,
    RecipelistComponent,
    MainComponent,
    RecipelistitemComponent,
    RecipedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
