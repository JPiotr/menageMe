import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { ContextComponent } from './components/context/context.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectElementComponent } from './components/project-element/project-element.component';
import { ButtonComponent } from './components/actions/buttons/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewComponent } from './components/actions/buttons/new/new.component';
import { EditComponent } from './components/actions/buttons/edit/edit.component';
import { DeleteComponent } from './components/actions/buttons/delete/delete.component';
import { ListComponent } from './components/context/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProjectsListComponent,
    ProjectComponent,
    HeaderComponent,
    ContextComponent,
    ActionsComponent,
    FooterComponent,
    ProjectElementComponent,
    ButtonComponent,
    NewComponent,
    EditComponent,
    DeleteComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
