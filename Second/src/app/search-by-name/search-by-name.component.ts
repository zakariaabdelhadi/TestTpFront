import { Component, OnInit } from "@angular/core";
import {Departement} from "../Departement";
import {Employe} from "../Employe";
import {EmployeService} from "../services/employe.service";

@Component({
  selector: "app-search-by-name",
  templateUrl: "./search-by-name.component.html",
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ["./search-by-name.component.css"],
})
export class SearchByNameComponent implements OnInit {

  public Dep: Departement = new Departement();

  public Deptss;
  public  empo;
  public submitted = false;
private id;
  private name;

  constructor(private employeService: EmployeService) {
    this.submitted = false;
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
   // this.submitted = false;

  }
public supp() {

    if (confirm("voullez vous vraimment supprimer l user " + this.name)) {
    this.employeService.deleteEmployeByName(this.name).subscribe(
        (data) => {console.log(data);  },
        (error) => console.log(error));
    alert("l user " + this.name + " est supprimé");

    } else {
    alert("vous n'êtes pas d'accord");
  }

    this.name = "";

}

  public onSubmit() {
    this.employeService.getDeptByName(this.name).subscribe(
      (data) => {
        // tslint:disable-next-line:no-console
        console.log(data);
        this.Deptss = data;
        for (const per of this.Deptss._embedded.departements) {
          console.log(per.id);
          this.id = per.id;

        }

      },
      (err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });

    this.getEmpByIdDept();

  }

  public getEmpByIdDept() {

    this.employeService.getEmployeesListDept(this.id).subscribe(
      (data) => {
        // tslint:disable-next-line:no-console
        console.log(data);
        this.empo = data;
      },
      (err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });

    this.submitted = true;

  }

}
