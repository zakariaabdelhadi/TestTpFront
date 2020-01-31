import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdateEpmloyeComponent } from "./update-epmloye.component";

describe("UpdateEpmloyeComponent", () => {
  let component: UpdateEpmloyeComponent;
  let fixture: ComponentFixture<UpdateEpmloyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEpmloyeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEpmloyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
