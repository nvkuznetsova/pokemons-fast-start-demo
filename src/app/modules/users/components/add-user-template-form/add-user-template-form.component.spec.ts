import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTemplateFormComponent } from './add-user-template-form.component';

describe('AddUserTemplateFormComponent', () => {
  let component: AddUserTemplateFormComponent;
  let fixture: ComponentFixture<AddUserTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
