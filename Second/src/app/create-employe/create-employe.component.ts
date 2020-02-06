import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Employe} from "../Employe";
import {EmployeService} from "../services/employe.service";
@Component({
  selector: "app-create-employe",
  templateUrl: "./create-employe.component.html",
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ["./create-employe.component.css"],
})
export class CreateEmployeComponent implements OnInit {
  public employee: Employe = new Employe();
  public submitted = false;

  constructor(private employeService: EmployeService, private router: Router) {
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
    this.employee.nom = ""; this.employee.prenom = ""; this.employee.mail = "";
  }

  public newEmployee(): void {
    this.submitted = false;
    this.employee = new Employe();
  }

  public save() {
    this.employeService.saveEmploye(this.employee)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
      );
    this.employee = new Employe();
  //  this.gotoList();
  }
  public retour() {

    this.router.navigate(["/employees"]);

  }

  public onSubmit() {
    this.submitted = true;
    this.save();
  }

  public gotoList() {
    this.router.navigate(["/employees"]);
  }
}
