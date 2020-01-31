// tslint:disable-next-line:import-spacing
import {HttpClient} from  "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { Employe } from "../employe";
@Injectable({
  providedIn: "root",
})
export class EmployeService {
  private url0 = "http://localhost:8080/listEmployes/";

  private urlgetByName2 = "http://localhost:8080/employes/search/byNom?nom=";
  private url = "http://localhost:8080/listEmployes";
   private urlDeleteById = "http://localhost:8080/deleteById/";

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient ) {}

  public saveEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.url, employe);
  }
  public updateEmploye(id: number, employee: Employe): Observable<Employe> {
    return this.http.put<Employe>(this.url0 + id, employee);
  }
  public deleteEmploye(id: number): Observable<string> {
    return this.http.delete<string>(this.urlDeleteById + id);
  }
  public getEmployeesList(): Observable <Employe[]> {

    return this.http.get<Employe[]>(this.url);
  }

  public getEmployeByName(nom: string): Observable <Employe[]> {

    return this.http.get<Employe[]>(this.urlgetByName2 + nom);
  }
  public getEmploye(id: number): Observable<Employe> {
    return this.http.get<Employe>(this.url0 + id);

  }
}
