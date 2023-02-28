import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

interface UserForm {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  shouldUseCountry: FormControl<boolean | null>;
  country?: FormControl<string | null>;
};

@Component({
  selector: 'app-add-user-reactive-form',
  templateUrl: './add-user-reactive-form.component.html',
  styleUrls: ['./add-user-reactive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserReactiveFormComponent implements OnInit {
  public countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Russia', code: 'RU' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  public myForm: FormGroup<UserForm> = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(20)]],
    shouldUseCountry: [false]
  });

  public get shouldUseCountry(): FormControl {
    return this.myForm.get('shouldUseCountry') as FormControl;
  }

  public get email(): FormControl {
    return this.myForm.get('email') as FormControl;
  }

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.shouldUseCountry.valueChanges.pipe(
      tap((value) => {
        if (!value) {
          this.myForm.removeControl('country');
        } else {
          this.myForm.addControl('country', this.fb.control('', [Validators.required]))
        }
      })
    ).subscribe();
  }

  public onSubmit(): void {
    console.log(this.myForm.value);
  }
}
