// tslint:disable-next-line:import-spacing
import {HttpClient} from  "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Departement} from "../Departement";
import { Employe } from "../employe";

@Injectable({
  providedIn: "root",
})
export class EmployeService {
  private url0 = "http://localhost:8080/listEmployes/";
  private urlgetByName2 = "http://localhost:8080/employes/search/byNom?nom=";
  private urlgetByName1 = "http://localhost:8080/getlistEmployes/";
private  urlPatch = "http://localhost:8080/employes/";
  private url = "http://localhost:8080/listEmployes";
  private urljdid = "http://localhost:8080/employes";

  private urlta3employeBydept1 = " http://localhost:8080/departements/";
  private urlta3employeBydept2 = "/listEmp";

  private urlDeleteById = "http://localhost:8080/deleteById/";
  private urlDeleteByName = "http://localhost:8080/deleteByNom/";

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient ) {}
// ************************************************* GET *******************************************

  public getEmployeesList(): Observable <Employe[]> {

    return this.http.get<Employe[]>(this.urljdid);
  }
  public getEmployeesListDept(id: number): Observable <Employe[]> {

    return this.http.get<Employe[]>(this.urlta3employeBydept1 + id + this.urlta3employeBydept2);
  }

  public getEmployeByName(nom: string): Observable <Employe[]> {

    // si vous voulez utiliser l url1 veuiller modifier dans ajouter.html
    return this.http.get<Employe[]>(this.urlgetByName2 + nom);
  }
  public getEmploye(id: number): Observable<Employe> {
    return this.http.get<Employe>(this.url0 + id);

  }
  // ************************************************* PUT *******************************************
  public updateEmploye(id: number, employee: Employe): Observable<Employe> {
    return this.http.put<Employe>(this.url0 + id, employee);
  }
  // ************************************************* PATCH *******************************************
  public patchEmploye(id: number, nom: string): Observable<string> {
    return this.http.patch<string>(this.urlPatch + id, nom);
  }
// ************************************************* POST *******************************************
  public saveEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.url, employe);
  }
// ************************************************* DELETE *******************************************
  public deleteEmploye(id: number): Observable<string> {
    return this.http.delete<string>(this.urlDeleteById + id);
  }
  public deleteEmployeByName(nom: string): Observable<string> {
    return this.http.delete<string>(this.urlDeleteByName + nom);
  }
// *****************************Creation********************************

  public creation(nbr1: number, nbr2: number): Observable<string> {
    return this.http.post<string>("http://localhost:8080/create/" + nbr1 + "/" + nbr2, "");
  }
  // ********************** 2eme Question **********
  public getDeptByName(nom: string): Observable <Departement[]> {

    // si vous voulez utiliser l url1 veuiller modifier dans ajouter.html
    return this.http.get<Departement[]>("http://localhost:8080/departements/search/byDeptNom?nom=" + nom);
  }
}
