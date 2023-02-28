import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserReactiveFormComponent } from './add-user-reactive-form.component';

describe('AddUserReactiveFormComponent', () => {
  let component: AddUserReactiveFormComponent;
  let fixture: ComponentFixture<AddUserReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
