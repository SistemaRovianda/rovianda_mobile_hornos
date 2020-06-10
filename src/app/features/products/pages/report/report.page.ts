import { Component, OnInit } from "@angular/core";
import { RouterStateSnapshot, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-report",
  templateUrl: "./report.page.html",
  styleUrls: ["./report.page.scss"],
})
export class ReportPage implements OnInit {
  path: string;

  constructor(private _route: ActivatedRoute) {
    this.path = `/user/${this._route.snapshot.paramMap.get("id")}/create-user`;
  }

  ngOnInit() {}
}
