import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormToParentComponent } from './shared/component/form-to-parent/form-to-parent.component';
import { ParentToCardComponent } from './shared/component/parent-to-card/parent-to-card.component';
import { FormsModule } from '@angular/forms';
import { FormEleComponent } from './shared/component/form-ele/form-ele.component';
import { TableEleComponent } from './shared/component/table-ele/table-ele.component';
import { FormViechildComponent } from './shared/component/form-viechild/form-viechild.component';
import { ViewchildTableComponent } from './shared/component/viewchild-table/viewchild-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormToParentComponent,
    ParentToCardComponent,
    FormEleComponent,
    TableEleComponent,
    FormViechildComponent,
    ViewchildTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
