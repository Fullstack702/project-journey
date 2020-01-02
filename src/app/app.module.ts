import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CookieModule } from "ngx-cookie";

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLoginComponent } from './components/auth/auth-login/auth-login.component';
import { AuthForgotPasswordComponent } from './components/auth/auth-forgot-password/auth-forgot-password.component';
import { AuthResetPasswordComponent } from './components/auth/auth-reset-password/auth-reset-password.component';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/main/projects/projects/projects.component';
import { ProjectDetailsPopupComponent } from './components/main/projects/project-details-popup/project-details-popup.component';
import { TaskListComponent } from './components/main/tasks/task-list/task-list.component';
import { TaskFilterPopupComponent } from './components/main/tasks/task-filter-popup/task-filter-popup.component';
import { TaskSaveFilterPopupComponent } from './components/main/tasks/task-save-filter-popup/task-save-filter-popup.component';
import { ReleaseSavePopupComponent } from './components/main/releases/release-save-popup/release-save-popup.component';
import { TaskDetailsPopupComponent } from './components/main/tasks/task-details-popup/task-details-popup.component';
import { BacklogComponent } from './components/main/backlog/backlog.component';
import { BoardComponent } from './components/main/board/board.component';
import { ReleaseListComponent } from './components/main/releases/release-list/release-list.component';
import { ReleaseDetailsPopupComponent } from './components/main/releases/release-details-popup/release-details-popup.component';
import { ReleaseCreatePopupComponent } from './components/main/releases/release-create-popup/release-create-popup.component';
import { TaskDeleteFilterPopupComponent } from './components/main/tasks/task-delete-filter-popup/task-delete-filter-popup.component';
import { UtilsService } from './services/utils.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BoardDetailsPopupComponent } from './components/main/board/board-details-popup/board-details-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthLoginComponent,
    AuthForgotPasswordComponent,
    AuthResetPasswordComponent,
    MainComponent,
    ProjectsComponent,
    ProjectDetailsPopupComponent,
    TaskListComponent,
    TaskFilterPopupComponent,
    TaskSaveFilterPopupComponent,
    TaskDetailsPopupComponent,
    BacklogComponent,
    BoardComponent,
    BoardDetailsPopupComponent,
    ReleaseListComponent,
    ReleaseDetailsPopupComponent,
    ReleaseCreatePopupComponent,
    ReleaseSavePopupComponent,
    TaskDeleteFilterPopupComponent,
  ],
  entryComponents: [
    ProjectDetailsPopupComponent,
    TaskDetailsPopupComponent,
    TaskFilterPopupComponent,
    TaskSaveFilterPopupComponent,
    ReleaseCreatePopupComponent,
    ReleaseSavePopupComponent,
    ReleaseDetailsPopupComponent,
    TaskDeleteFilterPopupComponent,
    BoardDetailsPopupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/app/projects', pathMatch: 'full' },
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          { path: 'login', component: AuthLoginComponent },
          { path: 'forgot-password', component: AuthForgotPasswordComponent },
          { path: 'reset-password', component: AuthResetPasswordComponent },
        ]
      },
      {
        path: 'app',
        component: MainComponent,
        children: [
          { path: 'projects', component: ProjectsComponent },
          { path: 'tasks', component: TaskListComponent },
          { path: 'backlog', component: BacklogComponent },
          { path: 'board', component: BoardComponent },
          { path: 'releases', component: ReleaseListComponent },
        ]
      }
    ]),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
  ],
  providers: [
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
