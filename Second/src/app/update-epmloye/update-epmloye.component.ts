import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Employe} from "../employe";
import {EmployeService} from "../services/employe.service";
@Component({
  selector: "app-update-epmloye",
  templateUrl: "./update-epmloye.component.html",
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ["./update-epmloye.component.css"],
})
export class UpdateEpmloyeComponent implements OnInit {
  public id: number;
  public employe: Employe;
  public submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private employeService: EmployeService) {}
  public ngOnInit() {
    this.employe = new Employe();
    this.id = this.route.snapshot.params.id;
    this.employeService.getEmploye(this.id)
      .subscribe((data) => {
        // tslint:disable-next-line:no-console
        console.log(data);
        this.employe = data;
        // tslint:disable-next-line:no-console
      }, (error) => console.log(error));
  }
  public updateEmploye() {
    this.employeService.updateEmploye(this.id, this.employe)
      .subscribe((data) => console.log(data), (error) => console.log(error));
    this.employe = new Employe();
    this.gotoList();
  }

public onSubmit() {
    this.submitted = true;
    this.updateEmploye();
}
public gotoList() {
    this.router.navigate(["/employees"]);
  }
}
