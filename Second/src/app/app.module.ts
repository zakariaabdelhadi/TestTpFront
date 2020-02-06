import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
// @ts-ignore
import { CreateEmployeComponent } from "./create-employe/create-employe.component";
import {EmployeListComponent} from "./employe-list/employe-list.component";
import { UpdateEpmloyeComponent } from "./update-epmloye/update-epmloye.component";
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { CreationComponent } from './creation/creation.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    CreateEmployeComponent,
    UpdateEpmloyeComponent,
    SearchByNameComponent,
    CreationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  // tslint:disable-next-line:object-literal-sort-keys
  bootstrap: [AppComponent],
})
export class AppModule {}
