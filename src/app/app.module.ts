import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchCase1Component } from './switch-case1/switch-case1.component';
import { SwitchCase2Component } from './switch-case2/switch-case2.component';
import { InputOutputIntroComponent } from './input-output-intro/input-output-intro.component';
import { StarComponent } from './input-output-intro/star/star.component';
import { ComponentsDecouplingComponent } from './components-decoupling/components-decoupling.component';
import { AddUserComponent } from './components-decoupling/add-user/add-user.component';
import { UsersTableComponent } from './components-decoupling/users-table/users-table.component';
import { FormsModule } from '@angular/forms';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { CustomeDirectivesComponent } from './custome-directives/custome-directives.component';
import { ColorfulDirective } from './custome-directives/colorful.directive';
import { HighlightDirective } from './custome-directives/highlight.directive';
import { CarouselDirective } from './custome-directives/carousel.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './service/user.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DirectivesComponent,
    SwitchCase1Component,
    SwitchCase2Component,
    InputOutputIntroComponent,
    StarComponent,
    ComponentsDecouplingComponent,
    AddUserComponent,
    UsersTableComponent,
    LifecycleHooksComponent,
    StructuralDirectiveComponent,
    CustomeDirectivesComponent,
    ColorfulDirective,
    HighlightDirective,
    CarouselDirective,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
