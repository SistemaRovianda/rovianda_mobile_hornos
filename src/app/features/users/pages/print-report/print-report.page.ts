import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Reportervice } from "src/app/shared/services/report.service";

@Component({
  selector: "print-report",
  templateUrl: "./print-report.page.html",
  styleUrls: ["./print-report.page.scss"],
})
export class PrintReportPageComponent implements OnInit {
  id: string;

  constructor(
    private route: ActivatedRoute,
    private reportService: Reportervice
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {}

  printReport() {
    this.reportService.getReport(this.id);
  }
}
