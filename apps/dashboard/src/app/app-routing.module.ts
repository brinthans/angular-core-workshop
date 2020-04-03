import { LoginComponent } from '@workshop/ui-login';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  // { path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full' 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
