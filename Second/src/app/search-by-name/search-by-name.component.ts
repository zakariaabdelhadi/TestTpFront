import { Component, OnInit } from "@angular/core";
import {Employe} from "../Employe";
import {EmployeService} from "../services/employe.service";

@Component({
  selector: "app-search-by-name",
  templateUrl: "./search-by-name.component.html",
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ["./search-by-name.component.css"],
})
export class SearchByNameComponent implements OnInit {
  public employs;
  public submitted = false;
  private name;

  constructor(private employeService: EmployeService) {
    this.submitted = false;
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
    this.submitted = false;

  }

  public onSubmit() {
    this.submitted = true;
    this.employeService.getEmployeByName(this.name).subscribe(
      (data) => {
        // tslint:disable-next-line:no-console
        console.log(data);
        this.employs = data;
      },
      (err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });
  }

}
