import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProjectCommisionedComponent } from './project-commisioned/project-commisioned.component';
import { ProjectModifyComponent } from './project-modify/project-modify.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent },
  {path: 'contact', component: ContactComponent}, 
  {path: 'register', component: RegisterComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'project-commisioned', component: ProjectCommisionedComponent},
  {path: 'project-modify', component: ProjectModifyComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
