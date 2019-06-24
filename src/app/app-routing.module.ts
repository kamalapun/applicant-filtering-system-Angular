import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { PageComponent } from './page/page.component';
import { PostjobComponent } from './postjob/postjob.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   {path:"",redirectTo:"/home",pathMatch:"full"},
  { path: "home", component: PageComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "jobseeker", component: JobseekerComponent },
  { path: "postjob", component: PostjobComponent },
  { path: "login", component: LoginComponent },
  { path: "signup",component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
