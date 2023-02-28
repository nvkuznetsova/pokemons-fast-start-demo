import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserReactiveFormComponent } from './components/add-user-reactive-form/add-user-reactive-form.component';
import { AddUserTemplateFormComponent } from './components/add-user-template-form/add-user-template-form.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: 'template', component: AddUserTemplateFormComponent },
      { path: 'reactive', component: AddUserReactiveFormComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
