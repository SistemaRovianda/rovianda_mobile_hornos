import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private router: Router,
    private reportService: Reportervice
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {}

  printReport() {
    this.reportService.getReport(this.id);
  }

  onBackPage(evt) {
    this.router.navigate(["/menu"]);
  }
}
