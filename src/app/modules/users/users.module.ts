import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserTemplateFormComponent } from './components/add-user-template-form/add-user-template-form.component';
import { AddUserReactiveFormComponent } from './components/add-user-reactive-form/add-user-reactive-form.component';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AddUserTemplateFormComponent,
    AddUserReactiveFormComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    DropdownModule
  ]
})
export class UsersModule { }
