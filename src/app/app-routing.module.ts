import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OverviewComponent } from './overview/overview.component';
import { PackagesComponent } from './packages/packages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [

 
// { path:' ', component:},

// { path: '',   redirectTo: '/content', pathMatch: 'full' },
 

{ path : ":username",component:ContentComponent,children:[
{ path: '',   redirectTo: 'overview', pathMatch: 'full' },

  { path:"overview",component:OverviewComponent },
  { path:"repositories",component:RepositoriesComponent },
  { path:"projects",component:ProjectsComponent },
  { path:"packages",component:PackagesComponent },

]},

 
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

{ path: "**", component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
