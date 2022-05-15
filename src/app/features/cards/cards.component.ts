import { Component, OnInit } from "@angular/core";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/category-model";
import { CategoriesService } from "../../servises/categories.service";
import { ActivatedRoute } from "@angular/router";
import { CardsService } from "../../servises/cards.service";
import { Card } from "../../models/card-model";
import { subscribeOn } from "rxjs";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  faTrash = faTrash;
  faPlus = faPlus;

  category: Category = { name: "", id: 0 };
  cards: Card[] = [];
  word = "";
  translation = "";

  constructor(
    private categoryService: CategoriesService,
    private activeRoute: ActivatedRoute,
    private cardServise: CardsService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param => {
      let idString = param.get("id");
      if (idString) {
        const id = Number.parseInt(idString);
        this.categoryService
          .getCategory(id)
          .subscribe(category => (this.category = category));

        this.cardServise
          .getCardsForCategory(id)
          .subscribe(cards => (this.cards = cards));
      }
    });
  }

  addCard() {
    if (this.category.id) {
      this.cardServise
        .addCard(this.category.id, {
          word: this.word,
          translation: this.translation,
        })
        .subscribe(card => {
          this.cards.push(card);
          this.word = "";
          this.translation = "";
        });
    }
  }
  removeCard(card: Card) {
    if (card.id && this.category.id) {
      this.cardServise
        .removeCard(this.category.id, card.id)
        .subscribe(() => this.cards.splice(this.cards.indexOf(card), 1));
    }
  }
}
