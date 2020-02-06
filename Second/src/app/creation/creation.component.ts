import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeService} from "../services/employe.service";

@Component({
  selector: "app-creation",
  templateUrl: "./creation.component.html",
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ["./creation.component.css"],
})
export class CreationComponent implements OnInit {

  private submitted;
  private nbr1;
  private nbr2;

  constructor(private route: ActivatedRoute, private router: Router, private employeService: EmployeService) { }

  public ngOnInit() {

  }

 public  onSubmit() {

  this.employeService.creation(this.nbr1, this.nbr2).subscribe(
    (data) => console.log(data),
    (error) => console.log(error),

 );

  //this.gotoList();

 }


}
