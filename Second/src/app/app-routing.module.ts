import {NgModule} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RouterModule, Routes} from "@angular/router";
import {CreateEmployeComponent} from "./create-employe/create-employe.component";
import {EmployeListComponent} from "./employe-list/employe-list.component";
import {SearchByNameComponent} from "./search-by-name/search-by-name.component";
import {UpdateEpmloyeComponent} from "./update-epmloye/update-epmloye.component";
const routes: Routes = [
  {path: "employees", component: EmployeListComponent},
  {path: "get", component: SearchByNameComponent},
  {path: "add" , component: CreateEmployeComponent},
  {path: "update/:id", component: UpdateEpmloyeComponent},
   {path: "", redirectTo: "employe", pathMatch: "full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // tslint:disable-next-line:object-literal-sort-keys
  exports: [RouterModule],
})
export class AppRoutingModule {}
