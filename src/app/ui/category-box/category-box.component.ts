import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faGear, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/category-model";

@Component({
  selector: "app-category-box",
  templateUrl: "./category-box.component.html",
  styleUrls: ["./category-box.component.css"],
})
export class CategoryBoxComponent implements OnInit {
  faTrash = faTrash;
  faGear = faGear;
  faPlay = faPlay;

  @Input() category: Category = { name: " ", id: 0 };
  @Output() removeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  emitRemove() {
    this.removeEvent.emit();
  }
}
