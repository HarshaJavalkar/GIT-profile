import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { OverviewComponent } from './overview/overview.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProjectsComponent } from './projects/projects.component';
import { PackagesComponent } from './packages/packages.component';
import { HttpClientModule } from '@angular/common/http';
// import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ProfileComponent,
    ProfileInfoComponent,
    OverviewComponent,
    RepositoriesComponent,
    ProjectsComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    // UsersComponent,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
