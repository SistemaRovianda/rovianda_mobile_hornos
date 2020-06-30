import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "title-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class TitleHeaderComponent implements OnInit {
  @Input() title: string;

  @Input() titlePath: string;
  // @Input() title: string;

  @Output("onBack") onBack = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickBack() {
    this.onBack.emit(this.titlePath);
  }
}
