import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavigationComponent } from "./ui/navigation/navigation.component";
import { CategoriesComponent } from "./features/categories/categories.component";
import { CategoryBoxComponent } from "./ui/category-box/category-box.component";
import { FormsModule } from "@angular/forms";
import { CardsComponent } from "./features/cards/cards.component";
import { GameComponent } from "./features/game/game.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoriesComponent,
    CategoryBoxComponent,
    CardsComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
