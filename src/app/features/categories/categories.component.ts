import { Component, OnInit } from "@angular/core";
import {
  faGear,
  faPlay,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/category-model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  faPlus = faPlus;
  newCategoryName = "";

  categories: Category[] = [{ name: "Dom" }, { name: "Rodzina" }];

  constructor() {}

  ngOnInit(): void {}

  addCategory() {
    this.categories.push({ name: this.newCategoryName });
    this.newCategoryName = "";
  }

  removeCategory(category: Category) {
    this.categories.splice(this.categories.indexOf(category), 1);
  }
}
