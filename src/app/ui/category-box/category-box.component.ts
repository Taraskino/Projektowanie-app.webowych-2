import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faGear, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-category-box",
  templateUrl: "./category-box.component.html",
  styleUrls: ["./category-box.component.css"],
})
export class CategoryBoxComponent implements OnInit {
  faTrash = faTrash;
  faGear = faGear;
  faPlay = faPlay;

  @Input() categoryName = "";
  @Output() removeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  emitRemove() {
    this.removeEvent.emit();
  }
}
