import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CodersComponent } from './coders/coders.component';
import { CoderComponent } from './coder/coder.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CoderFormComponent } from './coder-form/coder-form.component';
import { UserRformComponent } from './user-rform/user-rform.component';
import { CoderRformComponent } from './coder-rform/coder-rform.component';
import { FirstPipe } from './first.pipe';
import { SortPipe } from './sort.pipe';
import { PipExComponent } from './pip-ex/pip-ex.component';
import { UsersServiceComponent } from './users-service/users-service.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule, Routes } from '@angular/router';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';

const appRoutes: Routes = [
  { path: 'one', component: Routing1Component },
  { path: 'two', component: Routing2Component } 
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    UsersComponent,
    AddItemComponent,
    CodersComponent,
    CoderComponent,
    UserFormComponent,
    CoderFormComponent,
    UserRformComponent,
    CoderRformComponent,
    FirstPipe,
    SortPipe,
    PipExComponent,
    UsersServiceComponent,
    AddUserComponent,
    Routing1Component,
    Routing2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
