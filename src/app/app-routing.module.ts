import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsDecouplingComponent } from './components-decoupling/components-decoupling.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomeDirectivesComponent } from './custome-directives/custome-directives.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: ComponentsDecouplingComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'panel/:userName', component: CustomeDirectivesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
