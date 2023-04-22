import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ListComponent } from './list/list.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ListComponent,
    AddExpenseComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
