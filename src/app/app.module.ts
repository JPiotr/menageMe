import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectComponent } from './components/project/project.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { ContextComponent } from './components/context/context.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectComponent,
    HeaderComponent,
    ContextComponent,
    ActionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
