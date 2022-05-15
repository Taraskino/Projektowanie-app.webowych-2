import { Component, OnInit } from "@angular/core";
import {
  faGear,
  faPlay,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  faPlus = faPlus;
  catName = "jakis tekst";

  constructor() {}

  ngOnInit(): void {}
}
