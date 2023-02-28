import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-user-template-form',
  templateUrl: './add-user-template-form.component.html',
  styleUrls: ['./add-user-template-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserTemplateFormComponent {
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
  public shouldUseCountry = false;

  public onSubmit(myForm: any): void {
    console.log(myForm.value);
  }
}
