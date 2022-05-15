import { Component, OnInit } from "@angular/core";
import {
  faGear,
  faPlay,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/category-model";
import { CategoriesService } from "../../servises/categories.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  faPlus = faPlus;
  newCategoryName = "";

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe(categories => (this.categories = categories));
  }

  addCategory() {
    this.categoriesService
      .addCategory({ name: this.newCategoryName })
      .subscribe(category => {
        this.categories.push(category);
        this.newCategoryName = "";
      });
  }

  removeCategory(category: Category) {
    if (category.id) {
      this.categoriesService
        .removeCategory(category.id)
        .subscribe(() =>
          this.categories.splice(this.categories.indexOf(category), 1)
        );
    }
  }
}
