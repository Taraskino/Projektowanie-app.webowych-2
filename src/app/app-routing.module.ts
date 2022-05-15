import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./features/categories/categories.component";
import { CardsComponent } from "./features/cards/cards.component";
import { GameComponent } from "./features/game/game.component";

const routes: Routes = [
  { path: "", component: CategoriesComponent },
  { path: "cards/:id", component: CardsComponent },
  { path: "game/:id", component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
