import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';

import { AddUserReactiveFormComponent } from './add-user-reactive-form.component';

describe('AddUserReactiveFormComponent', () => {
  let component: AddUserReactiveFormComponent;
  let fixture: ComponentFixture<AddUserReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserReactiveFormComponent ],
      imports: [FormsModule, ReactiveFormsModule, InputSwitchModule, DropdownModule],
      providers: [FormBuilder],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 fields initially', () => {
    const element = fixture.debugElement;
    const fields = element.queryAll(By.css('.field'));

    expect(fields.length).toBe(4);
  });

  it('should render countries field if shouldUseCountry is checked', (done) => {
    const element = fixture.debugElement;
    component.myForm.patchValue({ shouldUseCountry: true });
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(element.queryAll(By.css('.field')).length).toBe(5);
      done();
    });
  });

  it('should submit form', (done) => {
    const form = fixture.debugElement.query(By.css('form'));
    spyOn(component, 'onSubmit');
    component.myForm.patchValue({ username: 'test', email: 'test@test', password: '1234' });

    form.triggerEventHandler('ngSubmit');
    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
