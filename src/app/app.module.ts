import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
