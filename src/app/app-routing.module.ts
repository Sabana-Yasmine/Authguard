import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActivateGuard } from './activate.guard';
import { DeactivateGuard } from './deactivate.guard';
import { LoadGuard } from './load.guard';
import { EmployeeComponent } from './employee/employee.component';
import { ResolveGuard } from './resolve.guard';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
 // {path : 'home' , component : HomeComponent},
  {path : 'employee' , component : EmployeeComponent},
  {path : 'contact' , component : ContactComponent,resolve:{data:ResolveGuard}},
  {path : 'login' , component : LoginComponent, canActivate:[ActivateGuard]},
  {path : 'register' , component : RegisterComponent, canDeactivate:[DeactivateGuard]},
  {path : 'about' , component : AboutComponent, canActivateChild:[ActivateGuard],
children:[
  {path:'employee',component:EmployeeComponent}
]},
  {path : 'canload', canLoad:[LoadGuard],loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path : 'admin',loadChildren:() => import('./admin/admin.module').then(mod=>mod.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
