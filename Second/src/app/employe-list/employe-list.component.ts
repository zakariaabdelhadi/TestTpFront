import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Employe} from "../employe";
import {EmployeService} from "../services/employe.service";
@Component({
  selector: "app-employe-list",
  templateUrl: "./employe-list.component.html",
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ["./employe-list.component.css"],
})
export class EmployeListComponent implements OnInit {
  public employees: Employe[];

  constructor(private route: ActivatedRoute, private router: Router, private employeService: EmployeService) {}
  public ngOnInit() {
    this.reloadData();
  }
  public deleteEmployee(id: number) {
    this.employeService.deleteEmploye(id).subscribe(
      (data) => {console.log(data); this.reloadData(); },
      (error) => console.log(error)); }

  public employeeUpdate(id: number) {
    this.router.navigate(["update", id]); }

  public reloadData() {
    this.employeService.getEmployeesList().subscribe(
      (data) => {
        // tslint:disable-next-line:no-console
        console.log(data);
        this.employees = data;
      },
      (err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });
  }}
